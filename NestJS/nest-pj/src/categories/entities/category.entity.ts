import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ProductEntities } from 'src/products/entities/product.entity';

@Entity('categories')
export class CategoryEntities {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ length: 100, unique: true })
  @IsString()
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => ProductEntities, (product) => product.category)
  products: ProductEntities[];

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // create_at: Date;

  // @UpdateDateColumn({
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  //   onUpdate: 'CURRENT_TIMESTAMP',
  // })
  // update_at: Date;
}
