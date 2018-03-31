import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.css']
})
export class RelatedMoviesComponent implements OnInit {

  movieId:string;
  movie : Object;
  similarMovies : Array<Object>;

  constructor(private movieService: MovieService, private  router: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.router.snapshot.paramMap.get('id');

    this.movieService.getMovieById(this.movieId)
      .subscribe((result) => {
        this.movie = result;
        console.log(this.movie);
      });

    this.movieService.getSimilarMovies(this.movieId)
      .subscribe((result) => {
        console.log(result);
        this.similarMovies = result.results;
      });

  }

}
