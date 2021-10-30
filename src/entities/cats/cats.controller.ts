import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.color = createCatDto.color;
    //cat.breed = createCatDto.breed;
    return this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    const cat = this.catsService.findOne(id);
    if (cat === undefined) {
      alert(`Cat with id = #${id} is not exists`);
    }
    return cat;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() { name, color }: UpdateCatDto,
  ): Promise<Cat> {
    const cat = await this.catsService.findOne(id);
    if (cat === undefined) {
      console.log(`Cat with id = ${id} is not exists`);
    }
    cat.name = name;
    cat.color = color;
    //cat.breed = breed;
    return this.catsService.update(cat);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.catsService.remove(id);
  }
}
