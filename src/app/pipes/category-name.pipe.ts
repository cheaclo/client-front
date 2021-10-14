import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split('_').join(' ');
  }

}
