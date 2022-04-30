import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
  
  // get movies
  getMovies()
  { return this.http.get(this.apiURL + '/list'); }

  // get una pelicula
  getOneMovie(id: string)
  { return this.http.get(this.apiURL+'/list/'+id); }

}