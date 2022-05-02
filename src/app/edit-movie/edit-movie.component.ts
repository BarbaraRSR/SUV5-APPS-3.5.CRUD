import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor( private movie: MoviesService, private router: ActivatedRoute ) { }

  editMovie = new FormGroup( {
    title: new FormControl( '' ),
    synopsis: new FormControl ( '' ),
    year: new FormControl ( '' )
  } );

  message:boolean = false;

  ngOnInit(): void {
    this.movie.getOneMovie( this.router.snapshot.params['id'] ).subscribe( (result: any) => {
      this.editMovie = new FormGroup( {
        title: new FormControl( result ['title'] ),
        synopsis: new FormControl ( result ['synopsis'] ),
        year: new FormControl ( result ['year'] )
      } );
    });
  }

  EditData() {
    this.movie.updateMovie( this.router.snapshot.params['id'], this.editMovie.value ).subscribe( (result) => {
      this.message = true;
    })
  }

  xmessage(){
    this.message = false;
  }

}
