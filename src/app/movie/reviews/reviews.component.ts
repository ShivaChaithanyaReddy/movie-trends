import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  movieId : string;
  reviews : Array<Object>;
  movie: Object;

  constructor(private movieService: MovieService, private  router: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.router.snapshot.paramMap.get('id');

    this.movieService.getMovieById(this.movieId)
      .subscribe((result) => {
        this.movie = result;
        console.log(this.movie);
      });

    this.movieService.getMovieReviews(this.movieId)
      .subscribe(result => {
        this.reviews = result.results;
        console.log(result.results);
      });
  }

}
