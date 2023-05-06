import { Repository } from "typeorm";
import {

    BadRequestException,
    Inject,
    Injectable,
    NotFoundException,

} from "@nestjs/common";

import { CarQueryDto, CarResponseDto, CarsCreateDto } from "../cars/dtos/car.dto";
import { Car } from "./car.entity";

@Injectable()
export class CarsService {
    constructor(
        @Inject("CARS_REPOSITORY")
        private carRepository: Repository<Car>,

    ) { }

    getCars(query: CarQueryDto): Promise<CarResponseDto[]> {
        return this.carRepository.find({
            where: query,
        });
    }
    async getCarById(id: string): Promise<CarResponseDto> {
        const car = await this.carRepository.findOne({
            where: { id },
        });
        if (!car) {
            throw new NotFoundException(`Car with ID: ${id} doesn't exist`);
        }

        return car;
    }


    createCar(body: CarsCreateDto): Promise<CarResponseDto> {
        return this.carRepository.save(body);
    }

    async updateCarPrice(
        id: string,
        price: number
    ): Promise<CarResponseDto> {
        await this.getCarById(id);

        try {
            await this.carRepository.save({
                id,
                price,
            });
        } catch (error) {
            throw new BadRequestException(
                `Please enter valid price.`
            );
        }

        return this.getCarById(id);
    }

    async updateCarAvailability(
        id: string,
        isAvailable: boolean
    ): Promise<CarResponseDto> {
        await this.getCarById(id);

        try {
            await this.carRepository.save({
                id,
                isAvailable,
            });
        } catch (error) {
            throw new BadRequestException(
                `Please enter true or false.`
            );
        }
        return this.getCarById(id);
    }
    async deleteCar(id: string): Promise<void> {
        await this.carRepository.softDelete(id);
    }


}