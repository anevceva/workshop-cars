import {
    Body,
    Controller,
    Get,
    Patch,
    Post,
    UsePipes,
    ValidationPipe,
    Param,
    Delete,
    ParseIntPipe,
    Query,
  } from "@nestjs/common";
 import { CarQueryDto, CarResponseDto, CarsCreateDto } from './dtos/car.dto'
  import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CarsService } from "./cars.service";
  
  @ApiTags("Cars")
  @Controller("cars")
  export class CarsController {
    constructor(private readonly carService: CarsService) {}
  
    @Get()
    @UsePipes(ValidationPipe)
    getCars(@Query() query: CarQueryDto): Promise<CarResponseDto[]> {
      return this.carService.getCars(query);
    }
  
    @Get(":id")
    getCar(@Param("id") id: string): Promise<CarResponseDto> {
      return this.carService.getCarById(id);
    }
  
    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() body: CarsCreateDto): Promise<CarResponseDto> {
      return this.carService.createCar(body);
    }
  

    @Patch(":id/price/:price") 
    updateCarPrice(
      @Param("id") id: string,
      @Param("price", ParseIntPipe) number: number
    ): Promise<CarResponseDto> {
      return this.carService.updateCarPrice(id, number);
    }

    @Patch(":id/availability/:availability") 
    updateCarAvailability  (
      @Param("id") id: string,
      @Param("availability") isAvailable: boolean
    ): Promise<CarResponseDto> {
      return this.carService.updateCarAvailability(id, isAvailable);
    }
  
    @Delete(":id")
    deleteCar(@Param("id") id: string): Promise<void> {
      return this.carService.deleteCar(id);
    }

}
  
  