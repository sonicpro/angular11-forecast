import { Component, AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from 'rxjs/operators';
import { DateTimeService } from '../date-time.service';
import { FetchWrapperService } from '../fetch-wrapper.service';
import { Forecast } from '../interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements AfterViewInit, OnInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  private getForecast: (search: string) => Observable<Forecast[]> = (search: string) =>
    this.fetchService.createHttpObservable(`http://localhost:5000/api/forecast/${search}`);

  private subject: Subject<Forecast[]> = new Subject();
  forecast$: Observable<Forecast[]> = this.subject.asObservable();

  constructor(private fetchService: FetchWrapperService, private dateTimeService: DateTimeService) { }

  fromUnixTimeSeconds: (unixTimeSeconds: number) => string = this.dateTimeService.fromUnixTimeSeconds;

  ngAfterViewInit(): void {
    const searchForecast$: Observable<Forecast[]> = fromEvent<any>(this.searchInput.nativeElement, 'input')
    .pipe(
      map(event => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter((search: string) => !!search),
      switchMap(search => this.getForecast(search))
    );
    searchForecast$.subscribe({
      next: (forecast: Forecast[]) => this.subject.next(forecast),
      complete: () => console.log(`complete`),
      error: (error: any) => console.log(`error ${error}`)
    });
  }

  ngOnInit(): void {
    this.getForecast('Kharkiv').subscribe({
      next: (forecast: Forecast[]) => this.subject.next(forecast)
    });
  }
}
