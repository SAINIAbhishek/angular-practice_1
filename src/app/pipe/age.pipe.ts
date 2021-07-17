import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value === "string") {
      return moment().diff(moment(value, 'yyyy-mm-dd'), 'years') + ' years';
    }
    return value;
  }

}
