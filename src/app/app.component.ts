import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor() {}

}
