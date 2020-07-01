import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {WeatherComponent} from './weather/weather.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import {HttpClientModule} from "@angular/common/http";
import {OpenWeatherService} from "../service/open-weather.service";
import { InfoBoxComponent } from './info-box/info-box.component';
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    InfoBoxComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forRoot(allAppRoutes),
        HttpClientModule,
        MatTooltipModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatTabsModule
    ],
  providers: [OpenWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
