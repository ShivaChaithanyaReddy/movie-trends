import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  movieId: string;
  movie: Object;
  fullCast : Array<Object>;
  cast : Array<Object>;

  fullCrew: Array<Object>;
  movieImagesBackdrops : Array<Object>;
  movieImagesPosters : Array<Object>;
  movieImages: Array<Object>;

  movieKeywords : Array<Object>;

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
        this.cast = result.cast.slice(0,6);
        this.fullCrew = result.crew;
        console.log(result);
      });

    this.movieService.getMovieImages(this.movieId)
      .subscribe((result) => {
          console.log(result);
          this.movieImagesBackdrops = result.backdrops;
          this.movieImages = result.posters.slice(0,4);
          this.movieImagesPosters = result.posters;
      });

    this.movieService.getMovieKeyWords(this.movieId)
      .subscribe((result) =>{
       this.movieKeywords = result.keywords;
      });
  }

}
