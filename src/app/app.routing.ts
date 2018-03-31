import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';
import {MOVIE_ROUTES} from './movie/movie.routing';
import {CelebrityComponent} from './celebrity/celebrity.component';

export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'celebrity/:id', component: CelebrityComponent},
  {path: 'movie/:id', component: MovieComponent, children:MOVIE_ROUTES}
];


export const routing = RouterModule.forRoot(APP_ROUTES);
