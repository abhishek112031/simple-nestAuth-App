import { IsNotEmpty, IsString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password:string;

}