import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntities } from './entities/product.entity';
import { FindManyOptions, ILike, Like, Repository } from 'typeorm';
import { CategoryEntities } from 'src/categories/entities/category.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntities)
    private readonly productRepository: Repository<ProductEntities>,

    @InjectRepository(CategoryEntities)
    private readonly categoryRepository: Repository<CategoryEntities>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductEntities> {
    const existingProduct = await this.productRepository.findOneBy({
      sku: createProductDto.sku,
    });
    if (existingProduct) {
      throw new BadRequestException(
        `Product with SKU ${createProductDto.sku} already exists`,
      );
    }

    if (createProductDto.category_id) {
      const category = await this.categoryRepository.findOneBy({
        category_id: createProductDto.category_id,
      });
      if (!category) {
        throw new NotFoundException(
          `Category with ID ${createProductDto.category_id} not found`,
        );
      }
    }

    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
  }): Promise<ProductEntities[]> {
    const { page, limit, search } = options;
    const skip = (page - 1) * limit;
    const queryOptions: FindManyOptions<ProductEntities> = {
      relations: ['category'],
      take: limit,
    };
    if (search) {
      queryOptions.where = [
        { name: ILike(`%${search}%`) },
        { description: ILike(`%${search}%`) },
      ];
    }
    return this.productRepository.find(queryOptions);
  }

  async findOne(id: number): Promise<ProductEntities> {
    const product = await this.productRepository.findOne({
      where: { product_id: id },
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntities> {
    const product = await this.findOne(id); // original product
    if (updateProductDto.category_id) {
      const category = await this.categoryRepository.findOneBy({
        category_id: updateProductDto.category_id,
      });
      if (!category) {
        throw new NotFoundException(
          `Category with ID ${updateProductDto.category_id} not found`,
        );
      }
    }

    this.productRepository.merge(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return { message: 'Delete successfully' };
  }
}
