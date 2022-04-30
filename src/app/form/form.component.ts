import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie: Movie = {
    title: null,
    synopsis: null,
    year: null,
    cover: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveMovie() {
    console.log(this.movie);
  }

}
