import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable ()
export class MovieService {
  apikey: string;

  onLoadMovie = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {
    this.apikey = '6fb4618b50d66604507f196a33bfe348';
    console.log('IN service');
  }

  gotoOverview(id: string) {
    this.onLoadMovie.emit(id);
  }

  getMovieById(id: string) {
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + id, {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getMovieReviews(id: string) {
    const params = new HttpParams().append('api_key', this.apikey).append('page','1');
    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + id+'/reviews', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getSimilarMovies(id:string){
    const params = new HttpParams().append('api_key', this.apikey).append('page','1');
    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + id+'/similar', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getMovieCredits(id: string){
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/'+ id +'/credits', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getMovieImages(id: string){
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/'+ id +'/images', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getMovieKeyWords(id: string){
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/'+ id +'/keywords', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });

  }


  getPopularMovies() {
    const params = new HttpParams().set('sort_by', 'popularity.desc').append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('http://api.themoviedb.org/3/discover/movie', {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }



}
