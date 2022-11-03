import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: "movie"})
@Unique(["id"])

export class Movie extends BaseEntity {
    @PrimaryGeneratedColumn("increment", {comment: "movie id"})
    id: number;

    @Column({type: "varchar", length: 100, comment: "제목"})
    title: string;

    @Column({type: "int", comment: "년도"})
    year: number;
    
    @Column({type: "varchar", length: 100, comment: "장르"})
    genres: string[];
}