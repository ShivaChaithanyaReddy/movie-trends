import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CelebrityService{

  apikey : string;

  constructor(private httpClient: HttpClient) {
    this.apikey = '6fb4618b50d66604507f196a33bfe348';
    console.log('IN service');
  }

  getCelebrity(id: string) {
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/person/'+ id , {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }

  getCelebrityImages(id: string) {
    const params = new HttpParams().append('api_key', this.apikey);

    console.log(params);
    return this.httpClient.get('https://api.themoviedb.org/3/person/'+ id + '/images' , {params: params})
      .map(res => {
        return res;
      })
      .catch((error: HttpErrorResponse) => {
        return Observable.throw(error);
      });
  }


}
