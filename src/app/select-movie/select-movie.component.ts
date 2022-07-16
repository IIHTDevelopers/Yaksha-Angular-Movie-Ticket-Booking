import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../_services';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrls: ['./select-movie.component.css']
})
export class SelectMovieComponent implements OnInit {

  movies:Movie[] = [];
  constructor(private movieService:MovieService, private router:Router) { }

  ngOnInit() {
    this.fetchAllMovies();
  }

  fetchAllMovies(){
    this.movieService.getAllMovies().subscribe((res:Movie[])=>{
      console.log(res);
      this.movies = res;
    }, (e:any)=>{
      console.log(e);
    });
  }

  selectMovie(selectedMovie){
    console.log(selectedMovie);
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    this.router.navigate(["book-show"])
  }

}
