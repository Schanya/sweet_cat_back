import { Cat } from 'src/entities/cats/cats.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'breeds' })
export class Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 200 })
  name: string;

  @Column({ name: 'coat_length', length: 200 })
  coat_length: string;

  @Column({ name: 'character', length: 255 })
  character: string;

  @Column({ name: 'weight' })
  weight: number;

  @OneToMany(() => Cat, (cats) => cats.breed)
  @JoinColumn({ name: 'id', referencedColumnName: 'cats_breeds_id' })
  cats: Cat[];
}
