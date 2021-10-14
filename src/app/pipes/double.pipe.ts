import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: number): string {
    return value % 1 === 0 ? String(value) + '.00' : String(value);
  }

}
