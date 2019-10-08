import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'textconvert'})

export class TextConvert implements PipeTransform {

  preposition = ["of", "the", "at", "on"];

  transform(value: string): string {

    let array1 = value.split(" ");
    let array2 = [];

    for(var x = 0; x < array1.length; x++){
        if(!this.preposition.includes(array1[x])){
          array2.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
        }else{
          array2.push(array1[x]);
        }
        
        }
        
    return array2.join(' ');
  }
}