import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntities } from './entities/product.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// @ApiTags('products')
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Create a new product' })
  create(@Body() createProductDto: CreateProductDto): Promise<ProductEntities> {
    return this.productsService.create(createProductDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiResponse({ status: 200, description: 'List all products' })
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number = 3,
    @Query('search') search?: string,
  ): Promise<ProductEntities[]> {
    page = Number(page);
    limit = Number(limit);
    return this.productsService.findAll({ page, limit, search });
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get a product by id' })
  async findOne(
    @Param('id', ParseIntPipe) id: string,
  ): Promise<ProductEntities> {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update a product' })
  @ApiResponse({ status: 200, description: 'Product not found' })
  @ApiResponse({ status: 200, description: 'Invalid input data' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductEntities> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete a product' })
  @ApiResponse({ status: 200, description: 'Product not found' })
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return this.productsService.remove(id);
  }
}
