import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer) {
  }

  public getWeather(location: string) {
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=0a97cd0d9dde43c5bb2214640202906&q=' + location);
  }

  public getLocationKey(location: string) {
    return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=oAz5ByCzaDL2aPMzOFpVkg506J3hJ3Oq&q=' + location + '&language=ru')
  }

  public makeSafeImageUrl(iconUrl: string) {
    if (parseInt(iconUrl) < 10) iconUrl = '0' + iconUrl;
    return this.sanitizer.bypassSecurityTrustUrl('https://developer.accuweather.com/sites/default/files/' + iconUrl + '-s.png');
  }

  public getForecast(location: string){
    return this.http.get('https://api.weatherapi.com/v1/forecast.json?key=0a97cd0d9dde43c5bb2214640202906&q=' + location + '&days=3');
  }
}
