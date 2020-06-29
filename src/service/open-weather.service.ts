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

  public getWeather(locationKey: number) {
    console.log(locationKey);
    return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=oAz5ByCzaDL2aPMzOFpVkg506J3hJ3Oq&language=ru');

    //return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=oAz5ByCzaDL2aPMzOFpVkg506J3hJ3Oq&q=' + location + '&language=ru');
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=ru&appid=cc7f74b0ed973107073bc0c1fee0d066')
  }

  public getLocationKey(location: string) {
    return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=oAz5ByCzaDL2aPMzOFpVkg506J3hJ3Oq&q=' + location + '&language=ru')
  }

  public makeSafeImageUrl(iconUrl: string) {
    if (parseInt(iconUrl) < 10) iconUrl = '0' + iconUrl;
    return this.sanitizer.bypassSecurityTrustUrl('https://developer.accuweather.com/sites/default/files/' + iconUrl + '-s.png');
  }

  public getForecast(locationKey: number){
    console.log(locationKey);
    return this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey + '?apikey=oAz5ByCzaDL2aPMzOFpVkg506J3hJ3Oq&language=ru&metric=true');
  }
}
