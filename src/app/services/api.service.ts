import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string = 'ead35f9b78f7defbaf35ead985ce0035';
  URI: string = '';



  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

  getWeather(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }

}
