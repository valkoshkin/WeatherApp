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
  @Input()
  public historyData: any;

  public _pos: number = 0;
  public _isRightDisabled: boolean = false;
  public _isLeftDisabled: boolean = true;


  constructor(public openWeatherService: OpenWeatherService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  dateParse(date: string) {
    let dateMas = date.split('-');
    let day = dateMas[2];
    day = parseInt(day).toString();
    let months = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[parseInt(dateMas[1]) - 1];
    return month + ' ' + day;
  }

  getDayOfWeekByDate(date: string) {
    let day: string;
    if (date == this.forecastData.location.localtime.split(' ')[0]){
      day = 'Today';
    }
    else{
      day = new Date(date).toLocaleDateString('en-us', {weekday: 'long'});
    }
    return day;
  }

  getHourForecastArray(data: any, pos: number) {
    console.log(data);
    let arrayToShow = [];
    for (let i = 0; i < 12; i++) {
      console.log(data.forecast.forecastday[0].hour[pos + i]);
      arrayToShow[i] = data.forecast.forecastday[0].hour[pos + i];
    }
    console.log(arrayToShow);
    return arrayToShow;
  }

  move(array, dir: string) {
    this._isRightDisabled = false;
    this._isLeftDisabled = false;
    switch (dir) {
      case "right":
        if (array[11].time.split(' ')[1] != '23:00'){
          this._pos += 6;
        }
        if (array[11].time.split(' ')[1] == '17:00'){
          this._isRightDisabled = true;
        }
        break;
      case "left":
        if (array[0].time.split(' ')[1] != '00:00'){
          this._pos -= 6;
        }
        if (array[0].time.split(' ')[1] == '06:00'){
          this._isLeftDisabled = true;
        }
        break;
    }
  }
}
