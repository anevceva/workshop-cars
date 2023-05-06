// import { TeamResponseDto } from "./../../teams/dtos/team.dto";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  Max,
  IsBoolean,
} from "class-validator";
// import { Player } from "../interfaces/player.interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Car } from "../interfaces/car.interface";

export class CarsCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The brand of car",
    example: "opel",
  })
  brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The model of car",
    example: "opel astra",
  })
  model: string;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "The year when car was created ",
    example: 2015,
  })
  year: number;

  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    description: "How much the cars cost",
    example: 4500,
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "Which color the car is",
    example: "red",
  })
  color: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Blob,
    required: true,
    description: "This car is available for sell",
    example: true,
  })
  isAvailable : boolean;

 


}

export class CarResponseDto extends CarsCreateDto implements Car {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: "The ID of the car",
    example: "uhdagiuge2",
  })
  id: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: "Date and time when player has been created",
    example: "2023-05-02T18:24:24.713Z",
  })
  createdAt!: Date;

  @ApiProperty({
    type: Date,
    required: true,
    description: "Date and time when player has been updated",
    example: "2023-05-02T18:24:24.713Z",
  })
  updatedAt!: Date;

  @ApiPropertyOptional({
    type: Date,
    required: false,
    description: "Date and time when player has been deleted",
    example: "2023-05-02T18:24:24.713Z",
  })
  deletedAt?: Date;
}

// export class PlayerAddToTeamDto {
//   @ApiProperty({
//     type: String,
//     required: true,
//   })
//   @IsUUID()
//   @IsNotEmpty()
//   playerId: string;

//   @ApiProperty({
//     type: String,
//     required: true,
//   })
//   @IsUUID()
//   @IsNotEmpty()
//   teamId: string;
// }

export class CarQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    required: false,
    description: "Search by the brand of the car",
    example: "opel",
  })
  brand?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    type: Number,
    required: false,
    description: "Search by the year of the car",
    example: 1995,
  })
  year?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    required: false,
    description: "Search by the color of the car",
    example: "red",
  })
  color?: string;
}
