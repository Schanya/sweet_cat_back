import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from '../cats_breeds/cats_breeds.entity';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  findOne(id: string): Promise<Cat> {
    return this.catRepository.findOne(id);
  }

  create(cat: Cat): Promise<Cat> {
    delete cat.id;
    return this.catRepository.save(cat);
  }

  update(cat: Cat): Promise<Cat> {
    return this.catRepository.save(cat);
  }

  async remove(id: string): Promise<void> {
    await this.catRepository.delete(id);
  }
}
