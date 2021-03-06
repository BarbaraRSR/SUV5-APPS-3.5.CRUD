import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  movies: Movie [] = [];
  alertDel: boolean = false;

  constructor( private movieService: MoviesService, private httpClient: HttpClient ) {
    httpClient.get( this.API_ENDPOINT + '/list' ).subscribe( (data: any ) => {
      this.movies = data;
    });
  }

  ngOnInit(): void {
  }

  delMovie( movie_id: any ) {
    this.movieService.delMovie( movie_id ).subscribe( (result) => {
      // console.log ( result )
      this.alertDel = true;
    } );
  }
  xalert(){
    this.alertDel = false;
  }

}
