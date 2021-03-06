import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ProvidersWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersWeatherProvider {
    apiKey = '09e252b6f7810781';
    url;
      constructor(public http: Http) {
        console.log('Hello WeatherProvider Provider');
      this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
      }
    getWeather(city, state) {
      return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
    }
    }
  
    