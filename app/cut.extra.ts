import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : "cutExtra"
})

export class CutExtra implements PipeTransform {
  transform(value:string):string {
    return  value.replace('<div>__localname__<\/div>\r\n', '');
  }
}
