import { Component, OnInit } from '@angular/core';
import {DataqueryService} from '../dataquery.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.scss']
})
export class SearchmovieComponent implements OnInit {

  word: string;
  results: any [];
  movie: Movie;
  closeResult: string;
  constructor(private db: DataqueryService) {

    this.word = "red";

   }

  ngOnInit() {
  }

  open(mov) {
    //console.log(mov);
    this.movie=mov;
  }



  search()
  {
   this.results = this.db.searchByString(this.word);
   //console.log(this.results);
  }

}
