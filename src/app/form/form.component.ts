import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor (private movie:MoviesService) {  }
  addMovie = new FormGroup({
    title: new FormControl( '' ),
    synopsis: new FormControl ( '' ),
    year: new FormControl ( '' ),
    cover: new FormControl ( '' )
  });

  ngOnInit(): void {
  }

  SaveData(){
    this.movie.saveMovieData( this.addMovie.value ).subscribe((result) => {
      console.log(result);
    });
  }

}
