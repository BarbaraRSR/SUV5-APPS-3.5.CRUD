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

  // publicar película
  saveMovieData( data:any ) {
    console.log( data );
    return this.http.post(this.apiURL+'/add', data); }

  // eliminar película
  delMovie( id: any ) {
    return this.http.delete( `${this.apiURL}/delete/${id}` );
  }

  // get una película
  getOneMovie(id: number )
  { return this.http.get( this.apiURL+'/list/'+id ); }

  // get una película
  updateMovie(id: number, data: any )
  { return this.http.put( this.apiURL+'/update/'+id, data ); }

}
