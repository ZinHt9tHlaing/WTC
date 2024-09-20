import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntities } from './entities/product.entity';
import { CategoryEntities } from 'src/categories/entities/category.entity';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntities,CategoryEntities])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
