import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ description: 'The email of the user', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  password: string;
}
