import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import {DataqueryService} from './dataquery.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchmovieComponent,
    ListmoviesComponent,
    ViewmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DataqueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
