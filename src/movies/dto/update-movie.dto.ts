import { PartialType } from "@nestjs/mapped-types"
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

export class UpdateMovieDto extends PartialType(CreateMovieDto){

    // 유효성 체크
    @IsString()
    readonly title?: string;

    @IsNumber()
    readonly year?: number;
    
    @IsString({each: true})
    readonly genres?: string[];
}