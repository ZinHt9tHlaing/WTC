import { CategoryEntities } from 'src/categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntities {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  color: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ length: 50, unique: true })
  sku: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  cost: number;

  @Column({ type: 'int', default: 0 })
  quantity_in_stock: number;

  @Column({ type: 'int', nullable: false })
  category_id: number;

  @ManyToOne(() => CategoryEntities, (category) => category.category_id)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntities;

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // created_at: Date;

  // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // updated_at: Date;
}
