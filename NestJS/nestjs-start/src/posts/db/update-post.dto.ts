import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePostDto extends PartialType(CreatePostDto) {
//   @IsNotEmpty()
//   @IsString()
//   @MaxLength(100)
//   @IsOptional()
//   title: string;

//   @IsNotEmpty()
//   @IsString()
//   @MinLength(10)
//   @IsOptional()
//   description: string;
}
