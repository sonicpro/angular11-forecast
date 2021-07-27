import { Injectable } from '@angular/core';

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  fromUnixTimeSeconds: (unixTimeSeconds: number) => string = (unixTimeSeconds: number) => {
    const day = new Date(unixTimeSeconds * 1000);
    const today = new Date;
    if (day.getDate() < today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear() ||
      day.getMonth() < today.getMonth() && day.getFullYear() === today.getFullYear() ||
      day.getFullYear() < today.getFullYear()) {
      throw new Error('Past day forecast is not supported');
    }
    switch (day.getDate() - today.getDate()) {
      case 0:
        return 'Today';
        break;
      case 1:
        return 'Tomorrow';
        break;
      default:
        return `${weekDays[day.getDay()]}, ${months[day.getMonth()]} ${day.getDate()}, ${day.getFullYear()}`
    }
  };
}


