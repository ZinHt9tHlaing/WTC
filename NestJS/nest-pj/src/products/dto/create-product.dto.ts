import { ApiProperty } from '@nestjs/swagger';
import {
  IsDecimal,
  IsInt,
  isNotEmpty,
  IsNotEmpty,
  isString,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'The name of the product', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'The color of the product', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({
    description: 'The description of the product',
    required: false,
  })
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The SKU of the product',
    maxLength: 50,
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  sku: string;

  @ApiProperty({
    description: 'The price of the product',
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsDecimal()
  price: number;

  @ApiProperty({
    description: 'The cost of the product',
  })
  @IsNotEmpty()
  @IsDecimal()
  cost: number;

  @ApiProperty({
    description: 'The quantity of the product in stock',
    default: 0,
  })
  @IsNotEmpty()
  @IsInt()
  quantity_in_stock: number;

  @ApiProperty({
    description: 'The ID of the category the product belongs to',
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  category_id?: number;
}
