import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aakSort'
})
export class AakSortPipe implements PipeTransform {

  public transform(data: any[], name: string, ascending: boolean): any[] {
    let result: any[] = data;

    result = result.sort((a, b) => this.sort(a, b, name, ascending));

    return result;
  }

  public sort(a: any, b: any, name: string, ascending: boolean): number {
    let result: number;

    if (ascending) {
      result = a[name] - b[name];
    } else {
      result = b[name] - a[name];
    }

    return result;
  }

}
