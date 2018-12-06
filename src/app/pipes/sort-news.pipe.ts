import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortNews'
})
export class SortNewsPipe implements PipeTransform {

  transform(value: any, args: number): any {

    if (args == 1) {
      return value.sort((a, b) => {
        if (a.dateCreated <= b.dateCreated) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if (args == 2) {
      return value.sort((a, b) => {
        if (a.dateCreated > b.dateCreated) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    if (args == 3) {
      return value.sort((a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    }


    if (args == 4) {
      return value.sort((a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
}
