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
    let month: string;
    switch (dateMas[1]) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = 'February';
        break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
      default:
        month = 'problems';
        break;
    }
    return month + ' ' + day;
  }


}
