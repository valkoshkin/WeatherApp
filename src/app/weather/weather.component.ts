import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from "../../service/open-weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(public openWeatherService: OpenWeatherService) {
  }

  public currentWeatherData: any;
  public forecastData: any;
  public historyData: any;

  ngOnInit(): void {
  }

  onSubmit(city: string) {
    this.openWeatherService.getWeather(city).subscribe( data => {
      this.currentWeatherData = data;
      this.openWeatherService.getHistory(city, this.currentWeatherData.location.localtime.split(' ')[0])
        .subscribe( history =>{
          this.historyData = history;
        });
    });
    this.openWeatherService.getForecast(city).subscribe( data => {
      this.forecastData = data;
    })

    // this.openWeatherService.getHistory(city, this.currentWeatherData.location.localtime.split(' ')[0]);
  }

}
