import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import {ViewmovieComponent} from './viewmovie/viewmovie.component'

const routes: Routes = [ 
  {path: 'search', component: SearchmovieComponent , pathMatch: 'full'},  
  {path: 'list', component: ListmoviesComponent, pathMatch: 'full'},
  {path: 'view/:id', component: ViewmovieComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
