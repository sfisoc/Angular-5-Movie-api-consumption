import { Component, OnInit } from '@angular/core';
import {DataqueryService} from '../dataquery.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.scss']
})
export class ViewmovieComponent implements OnInit {

  mv: any;
  id: number;

  constructor(private db: DataqueryService,private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(res =>this.currentmovie(res.id));
   }

   currentmovie(me)
   {
     let tmp = this.db.getByMovieId(me);
     this.mv = tmp;

   }

  ngOnInit() {
    

   
  }

}
