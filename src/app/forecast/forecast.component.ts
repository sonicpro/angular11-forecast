import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FetchWrapperService } from '../fetch-wrapper.service';
import { Forecast, Weather } from '../interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // forecasts$: Observable<Forecast[]> = of([
  //   { dt: 12345, name: "Pepperoni", price: 899, weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d3" } ] },
  //   { dt: 6789, name: "Supreme", price: 999, weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d3" } ] },
  //   { dt: 4567, name: "Sizzler", price: 899, weather: [ { id: 800, main: "Clear", description: "clear sky", icon: "01d3" } ] },
  // ]);

  forecasts$: Observable<Forecast[]> =  this.fetchService.createHttpObservable("http://localhost:5000/api/forecast/Kharkiv");

  constructor(private fetchService: FetchWrapperService) { }

  ngOnInit(): void {

  }

}
