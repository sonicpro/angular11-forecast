import { Weather } from './weather';

export interface Forecast {
  dt: number;
  weather: Weather[];
}
