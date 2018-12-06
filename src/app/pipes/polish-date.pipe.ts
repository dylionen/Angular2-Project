
import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['styczen', 'luty', 'marzec', 'kwiecien', 'maj',
  'czerwiec', 'lipiec', 'sierpien', 'wrzesien', 'pazdziernik',
  'listopad', 'grudzien'];

@Pipe({
  name: 'polishDate'
})
export class PolishDatePipe implements PipeTransform {
  date: Date;
  monthNumber: number;
  month: string;


  transform(value: any, args?: any): any {

    this.date= new Date(value);


    this.monthNumber=this.date.getMonth();

    this.month = MONTHS[this.monthNumber];

    return this.date.getDate() + ' ' + this.month + ' ' + this.date.getFullYear();
  }

}
