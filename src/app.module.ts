import { Module } from '@nestjs/common';
import { Entities } from './entities/entities.module';
import { DatabaseModule } from './database/db.module';

@Module({
  imports: [DatabaseModule, Entities],
  controllers: [],
  providers: [],
})
export class AppModule {}
