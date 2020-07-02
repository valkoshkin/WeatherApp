import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from "../../service/open-weather.service";
import {finalize, switchMap, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public _loading: boolean = false;
  public currentWeatherData: any;
  public forecastData: any;
  public historyData: any;

  constructor(public openWeatherService: OpenWeatherService) {
  }

  ngOnInit(): void {
  }

  onSubmit(city: string) {
    this._loading = true;
    this.openWeatherService.getCurrentWeather(city)
      .pipe(
        take(1),
        switchMap(currentWeather => {
          this.currentWeatherData = currentWeather;
          return this.openWeatherService.getHistory(city, this.currentWeatherData.location.localtime.split(' ')[0])
            .pipe(
              take(1),
              tap(history => {
                this.historyData = history;
              }))
        }),
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe();
    this.openWeatherService.getForecast(city)
      .pipe(
        take(1),
        tap( forecast => {
          this.forecastData = forecast;
        })
      )
      .subscribe()
  }
}
