import { Component, OnInit } from '@angular/core';
import { DataqueryService } from '../dataquery.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.scss']
})
export class ListmoviesComponent implements OnInit {

  results: any[];
  current: Movie;
  constructor(private db: DataqueryService) { }

  ngOnInit() {
  }

  show(mov)
  {
    this.current = mov;
  }


  pop() {
    this.current = null;
    this.results = this.db.getPopular();
  }

  top() {
    this.current = null;
    this.results = this.db.getTopRated();
  }
  now() {
    this.current = null;
    this.results = this.db.getNowplaying();
  }
  upcoming() {
    this.current = null;
    this.results = this.db.getUpcoming();
  }
}
