import { Text } from "@angular/compiler/src/i18n/i18n_ast";

export class Movie {
    adult: false;
    backdrop_path: string;
    genre_ids: any[];
    original_language: string;
    original_title: string;
    overview: Text;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

  

    constructor(adult: false,backdrop_path: string,genre_ids: any[],original_language: string,
        original_title: string,
        overview: Text,
        popularity: number,
        poster_path: string,
        release_date: Date,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number)
        {
            this.adult=adult;
            this.backdrop_path=backdrop_path;
            this.genre_ids=genre_ids;
            this.original_language=original_language;
            this.original_title=original_title;
            this.overview=overview;
            this.popularity=popularity;
            this.poster_path=poster_path;
            this.release_date=release_date;
            this.title=title;
            this.video=video;
            this.vote_average=vote_average;
            this.vote_count=vote_count;
        }

}
