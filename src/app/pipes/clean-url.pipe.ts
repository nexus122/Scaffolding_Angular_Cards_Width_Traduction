import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanUrl'
})
export class CleanUrlPipe implements PipeTransform {

  transform(value: string, ): string {
    value = value.replace(/\s/g, '-'); //👈 clear white spaces
    value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //👈 delete accents
    return value;
  }

}
