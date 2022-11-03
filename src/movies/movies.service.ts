import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MovieRepository } from './repository/movies.repository';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private movieRepository: MovieRepository
    ) {}
 
    async getAll(): Promise<Movie[]> {
        return await this.movieRepository.find();
    }
  
    async create(movieData: CreateMovieDto): Promise<Movie> {
        return await this.movieRepository.save(movieData);
    }

    async update(movie_id: number, movieData: UpdateMovieDto){
        await this.movieRepository.update(movie_id, movieData);
    }
    
    // DB 연결 전
    /*
    // entities에서 갖고옴
    private movies: Movie[] = [];

      getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:number):Movie {
        console.log(typeof id)
        // return this.movies.find(movie => movie.id === parseInt(id))
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

      deleteOne(id: number) {
        // this.movies.filter(movie => movie.id !== +id);
        this.getOne(id);
       this.movies = this.movies.filter(movie => movie.id !== id);
        
    }

      update(id:number, updateData : UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});

    }
    */

   
}
