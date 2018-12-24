import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'


@Injectable()
export class CountryService {
  
  constructor(private http : HttpClient) { }

  getPosts()
  {
    return this.http.get(environment.base_url + '/posts');
  }


}
