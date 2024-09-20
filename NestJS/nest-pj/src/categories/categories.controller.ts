import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CategoryEntities } from './entities/category.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new category' })
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryEntities> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List all categories' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
  ): Promise<CategoryEntities[]> {
    return this.categoriesService.findAll({ page, limit, search });
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get a category by id' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CategoryEntities> {
    return this.categoriesService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 201, description: 'update a category' })
  update(
    @Param('id',ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
