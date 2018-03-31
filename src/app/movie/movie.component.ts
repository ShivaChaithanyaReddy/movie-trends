import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : Object;
  cast : Array<Object>;

  movieId: string;

  constructor(private movieService: MovieService, private router: ActivatedRoute, private  route: Router) { }

  ngOnInit() {
    this.router.params.subscribe( (params) => {
      const id = params['id'];
      this.movieId = id;
      this.movieService.getMovieById(id)
        .subscribe((result) => {
          this.movie = result;
          this.route.navigate(['/movie', this.movieId, 'overview', {id:this.movieId}]);
          console.log(this.movie);
        });

    });
  }

}
