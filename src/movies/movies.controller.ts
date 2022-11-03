import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService){}

  @Get()
  async getAll(): Promise<Movie[]>{
    return await this.moviesService.getAll();
  }

  @Post()
  async create(@Body() movieData: CreateMovieDto): Promise<Movie> {
      return this.moviesService.create(movieData);
  }

  @Patch(":movie_id")
  async update(@Param("movie_id", new ParseIntPipe()) movie_id: number, @Body(new ValidationPipe()) movieData: UpdateMovieDto){
      return this.moviesService.update(movie_id, movieData)
  }

  // DB 쓰기 전
  /*
  @Get()
  getAll():Movie[] {
    return this.moviesService.getAll();
  }
 

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId)
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);

 
  }

  */
}
