import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLabel'
})
export class TimeLabelPipe implements PipeTransform {

  transform(time: string): string {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);
    
    const date = new Date(0); 
    date.setUTCHours(hours, minutes, seconds);
    
    if (date.getTime() >= 0) {
        return 'Extra Time';
    } else {
     return 'Short Time';
    }
  }

}
