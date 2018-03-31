import {Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {CastComponent} from './cast/cast.component';
import {RelatedMoviesComponent} from './related-movies/related-movies.component';

export const MOVIE_ROUTES: Routes = [
  {path: 'overview', component : OverviewComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'cast-crew', component: CastComponent},
  {path: 'related', component: RelatedMoviesComponent}
];


