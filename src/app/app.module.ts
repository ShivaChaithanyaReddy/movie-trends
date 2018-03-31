import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OverviewComponent } from './movie/overview/overview.component';
import { ReviewsComponent } from './movie/reviews/reviews.component';
import { CastComponent } from './movie/cast/cast.component';
import { RelatedMoviesComponent } from './movie/related-movies/related-movies.component';
import { MediaComponent } from './movie/media/media.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';
import { CelebrityComponent } from './celebrity/celebrity.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    ReviewsComponent,
    CastComponent,
    RelatedMoviesComponent,
    MediaComponent,
    HomeComponent,
    CelebrityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
