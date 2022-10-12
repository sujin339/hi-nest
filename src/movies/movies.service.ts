import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    // 가짜 데이터베이스
    // entities에서 갖고옴
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id:number):Movie {
        // return this.movies.find(movie => movie.id === parseInt(id))
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    deleteOne(id: number) {
        // this.movies.filter(movie => movie.id !== +id);
        this.getOne(id);
       this.movies = this.movies.filter(movie => movie.id !== id);
       
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id:number, updateData : UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});

    }
}
