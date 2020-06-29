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
  public locationData: any;
  public forecastData: any;

  ngOnInit(): void {
  }

  onSubmit(city: string) {
    this.openWeatherService.getLocationKey(city).subscribe( data =>{
      this.locationData = data[0];
      this.openWeatherService.getWeather(data[0].Key).subscribe( currentWeather =>{
        this.currentWeatherData = currentWeather;
      });
      this.openWeatherService.getForecast(data[0].Key).subscribe( forecast => {
        console.log(forecast);
        this.forecastData = forecast;
      });
    })
    // this.openWeatherService.getWeather(city).subscribe(data => {
    //   this.weatherData = data;
    // });
    // console.log(this.weatherData);
  }

}
