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
  public forecastData: any;


  constructor(public openWeatherService: OpenWeatherService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  dateParse(date: string){
    let dateMas = date.split('-');
    let day = dateMas[2];
    day = parseInt(day).toString();
    let months = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[parseInt(dateMas[1]) - 1];
    return month + ' ' + day;
  }

  getDayOfWeekByDate(date: string){
    return new Date(date).toLocaleDateString('en-us', {weekday: 'long'});
  }


}
