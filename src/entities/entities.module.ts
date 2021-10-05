import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/cats.entity';
import { Breed } from './cats_breeds/cats_breeds.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat, Breed])],
  controllers: [],
  providers: [],
})
export class Entities {}
