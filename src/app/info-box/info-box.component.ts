import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from "../../service/open-weather.service";

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit, OnChanges {

  @Input()
  public currentWeatherData: any;
  @Input()
  public locationData: any;
  @Input()
  public forecastData: any;

  public weatherIcon: any;

  constructor(public openWeatherService: OpenWeatherService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.weatherIcon = this.openWeatherService.makeSafeImageUrl(this.currentWeatherData[0].WeatherIcon);
  }

  ngOnInit(): void {
    console.log(this.locationData);
    this.weatherIcon = this.openWeatherService.makeSafeImageUrl(this.currentWeatherData[0].WeatherIcon);
  }


}
