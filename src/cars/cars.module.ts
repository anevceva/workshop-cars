import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { DatabaseModule } from '../database/database.module';
import { carProvider } from './cars.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [...carProvider,CarsService]
})
export class CarsModule {}

