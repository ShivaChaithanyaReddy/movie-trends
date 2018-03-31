import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: Array<Object>;

  ngOnInit(): void {
    this.movieService.getPopularMovies()
      .subscribe(result => {
        this.popularMovies = result.results.splice(0,6);
        console.log(result.results.slice(0,6));
      });
  }

  constructor(private movieService: MovieService) {}


}
