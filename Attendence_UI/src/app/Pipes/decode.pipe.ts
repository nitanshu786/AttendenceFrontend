import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decode'
})
export class DecodePipe implements PipeTransform {

  transform(value: string): string {
    try {
      const base64String = value.split(',')[1] || value;

      // Decode the base64 string to a UTF-8 string
      const decodedString = atob(base64String);
      return decodedString;
    } catch (error) {
      // Handle decoding errors (e.g., if the input is not a valid base64 string)
      console.error('Error decoding base64:', error);
      return 'Decoding Error';
    }
  }

}
