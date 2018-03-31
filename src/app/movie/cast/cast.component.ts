import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  movieId : string;
  cast : Array<Object>;

  fullCast : Array<Object>;
  fullCrew: Array<Object>;

  movie: Object;

  constructor(private movieService: MovieService, private  router: ActivatedRoute) { }

  ngOnInit() {
    this.movieId = this.router.snapshot.paramMap.get('id');

    this.movieService.getMovieById(this.movieId)
      .subscribe((result) => {
        this.movie = result;
        console.log(this.movie);
      });

    this.movieService.getMovieCredits(this.movieId)
      .subscribe((result) =>{
        this.fullCast = result.cast;
        this.fullCrew = result.crew;
console.log(result);
      });


  }

}
