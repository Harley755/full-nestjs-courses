import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpots: number;

  @Column()
  area: number;

  @Column()
  hasSwimmingPool: boolean;

  @Column()
  hasGardenPool: boolean;

  @Column()
  hasBalcony: boolean;

  @OneToOne(() => Property, (property) => property.propertyFeacture)
  @JoinColumn()
  property: Property;
}
