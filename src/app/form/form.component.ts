import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  addMovie = new FormGroup({
    title: new FormControl( '' ),
    synopsis: new FormControl ( '' ),
    year: new FormControl ( '' ),
    cover: new FormControl ( '' )
  });
  message:boolean = false;
  id: any;
  edit: boolean = false;
  movies: Movie[];

  constructor (private movie:MoviesService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.edit = true;
      this.moviesService.get().subscribe( (data: Movie[]) => {
        this.movies = data;
        console.log(data);
      });
    } else {
      this.edit = false;
    }
  }

  ngOnInit(): void {
  }

  SaveData(){
    this.movie.saveMovieData( this.addMovie.value ).subscribe((result) => {
      // console.log(result);
      this.message = true;
      this.addMovie.reset( {} );
    });
  }
  xmessage(){
    this.message = false;
  }

}
