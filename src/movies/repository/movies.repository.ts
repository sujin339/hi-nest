// import { Movie } from "../entities/movie.entity";
import { Movie } from "../entities/movie.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {}
