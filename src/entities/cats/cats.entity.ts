import { Breed } from 'src/entities/cats_breeds/cats_breeds.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 200 })
  name: string;

  @Column({ name: 'color', length: 200 })
  color: string;

  @ManyToOne(() => Breed, (catsBreeds) => catsBreeds.cats)
  @JoinColumn({ name: 'cats_breeds_id', referencedColumnName: 'id' })
  breed: Breed;
}
