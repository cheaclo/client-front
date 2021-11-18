import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountData'
})
export class AccountDataPipe implements PipeTransform {

  transform(value: any): unknown {
    if (typeof (value === Date)) {
      return value.toString().slice(0, 10);
    } else {
      return value == null || value.toString().length == 0 ? 'N/A' : value;
    }
  }

}
