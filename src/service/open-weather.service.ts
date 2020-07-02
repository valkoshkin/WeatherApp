import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) {
  }

  public getCurrentWeather(location: string) {
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=0a97cd0d9dde43c5bb2214640202906&q=' + location);
  }

  public getForecast(location: string){
    return this.http.get('https://api.weatherapi.com/v1/forecast.json?key=0a97cd0d9dde43c5bb2214640202906&q=' + location + '&days=3');
  }

  public getHistory(location: string, date: string){
    return this.http.get('https://api.weatherapi.com/v1/history.json?key=0a97cd0d9dde43c5bb2214640202906&q=' + location + '&dt=' + date);
  }
}
