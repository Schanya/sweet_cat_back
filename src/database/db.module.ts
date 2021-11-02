import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from 'src/entities/cats/cats.controller';
import { CatsModule } from 'src/entities/cats/cats.module';
import { CatsService } from 'src/entities/cats/cats.service';
import { Entities } from 'src/entities/entities.module';
import { dbconfig } from '../configs/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(dbconfig), Entities],
  controllers: [CatsController],
  providers: [CatsService],
})
export class DatabaseModule {}
