import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateTimeService } from '../date-time.service';
import { FetchWrapperService } from '../fetch-wrapper.service';
import { Forecast, Weather } from '../interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements AfterViewInit {
  forecasts$: Observable<Forecast[]> =  this.fetchService.createHttpObservable("http://localhost:5000/api/forecast/Kharkiv");

  constructor(private fetchService: FetchWrapperService, private dateTimeService: DateTimeService) { }

  fromUnixTimeSeconds: (unixTimeSeconds: number) => string = this.dateTimeService.fromUnixTimeSeconds;

  ngAfterViewInit(): void {

  }
}
