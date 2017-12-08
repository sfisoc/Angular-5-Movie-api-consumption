import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { SearchObj } from './interfaces/search-obj';
import { forEach } from '@angular/router/src/utils/collection';
import { Movie } from './models/movie'

@Injectable()
export class DataqueryService {

  baseUrl: string;
  apikey: any;
  query: string;
  language: string;
  page: number;
  include_adult: false;
  year: number;
  primary_release_year: number;
  searchConstant: string;
  and: string;
  constructor(private http: HttpClient) {
    this.apikey = environment.apiKey;
    this.language = "en-US";
    this.baseUrl = "https://api.themoviedb.org/3/";
    this.searchConstant = "search/movie?api_key=";
    this.and = "&";
    this.primary_release_year = 0;
    this.year = 0;
    this.include_adult = false;
    this.page = 1;

  }



  searchByString(query) {
    let item = this.baseUrl + this.searchConstant + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'query=' + query + this.and + 'page=' + this.page + this.and
      + 'include_adult=' + this.include_adult;
    let movies = [];
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        for (let mv of data.results) {
          // console.log(mv.title);
          let movie = new Movie(mv.adult, mv.backdrop_path, mv.genre_ids, mv.original_language,
            mv.original_title,
            mv.overview,
            mv.popularity,
            mv.poster_path,
            mv.release_date,
            mv.title,
            mv.video,
            mv.vote_average,
            mv.vote_count);
          //console.log(movie.title);
          movies.push(movie);
        }

        // console.log(movies);
        return movies;

      }
    );

    return movies;

  }

  getByMovieId(id) {
    let item = this.baseUrl + "/movie" + id + "?api_key=" + this.apikey + this.and +
      "language=" + this.language;

    this.http.get<Movie>(item).subscribe(
      data => {
        return data;
      });

    return Movie;
  }

  getPopular() {
    let item = this.baseUrl + "movie/popular?api_key=" + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'page=' + this.page;
    let movies = [];
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        for (let mv of data.results) {
          // console.log(mv.title);
          let movie = new Movie(mv.adult, mv.backdrop_path, mv.genre_ids, mv.original_language,
            mv.original_title,
            mv.overview,
            mv.popularity,
            mv.poster_path,
            mv.release_date,
            mv.title,
            mv.video,
            mv.vote_average,
            mv.vote_count);
          //console.log(movie.title);
          movies.push(movie);
        }

        // console.log(movies);
        return movies;

      }
    );

    return movies;
  }

  getTopRated() {

    let item = this.baseUrl + "movie/top_rated?api_key=" + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'page=' + this.page;
    let movies = [];
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        for (let mv of data.results) {
          // console.log(mv.title);
          let movie = new Movie(mv.adult, mv.backdrop_path, mv.genre_ids, mv.original_language,
            mv.original_title,
            mv.overview,
            mv.popularity,
            mv.poster_path,
            mv.release_date,
            mv.title,
            mv.video,
            mv.vote_average,
            mv.vote_count);
          //console.log(movie.title);
          movies.push(movie);
        }

        // console.log(movies);
        return movies;

      }
    );

    return movies;

  }

  getUpcoming() {
    let item = this.baseUrl + "movie/upcoming?api_key=" + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'page=' + this.page;
    let movies = [];
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        for (let mv of data.results) {
          // console.log(mv.title);
          let movie = new Movie(mv.adult, mv.backdrop_path, mv.genre_ids, mv.original_language,
            mv.original_title,
            mv.overview,
            mv.popularity,
            mv.poster_path,
            mv.release_date,
            mv.title,
            mv.video,
            mv.vote_average,
            mv.vote_count);
          //console.log(movie.title);
          movies.push(movie);
        }

        // console.log(movies);
        return movies;

      }
    );

    return movies;
  }

  getLatest() {
    let item = this.baseUrl + "movie/latest?api_key=" + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'page=' + this.page;
    let movies = Movie;
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        return data;
       

        // console.log(movies);
    

      }
    );

    return movies;
  }

  getNowplaying() {
    let item = this.baseUrl + "movie/now_playing?api_key=" + environment.apiKey + this.and
      + 'language=' + this.language + this.and + 'page=' + this.page;
    let movies = [];
    console.log("URL :" + item);
    this.http.get<SearchObj>(item).subscribe(
      data => {
        // console.log(data.results);
        for (let mv of data.results) {
          // console.log(mv.title);
          let movie = new Movie(mv.adult, mv.backdrop_path, mv.genre_ids, mv.original_language,
            mv.original_title,
            mv.overview,
            mv.popularity,
            mv.poster_path,
            mv.release_date,
            mv.title,
            mv.video,
            mv.vote_average,
            mv.vote_count);
          //console.log(movie.title);
          movies.push(movie);
        }

        // console.log(movies);
        return movies;

      }
    );

    return movies;
  }

}
