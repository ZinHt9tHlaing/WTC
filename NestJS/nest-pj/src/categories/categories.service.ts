import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntities } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntities)
    private readonly categoryRepository: Repository<CategoryEntities>,
  ) {}

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }

  async findAll(options: { page: number; limit: number; search?: string }) {
    const { page, limit, search } = options;
    const query = this.categoryRepository.createQueryBuilder('category');

    if (search) {
      query.where('category.name LIKE :search', { search: `%${search}%` });
    }

    return query
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();
  }

  async findOne(id: number): Promise<CategoryEntities> {
    const category = await this.categoryRepository.findOneBy({
      category_id: id,
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryEntities> {
    const existingCategory = await this.categoryRepository.findOneBy({
      name: createCategoryDto.name,
    });
    if (existingCategory) {
      throw new BadRequestException(
        `Category with name "${createCategoryDto.name}" already exists`,
      );
    }
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryEntities> {
    const category = await this.findOne(id);
    this.categoryRepository.merge(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return { message: 'Delete successfully' };
  }
}
