import { Pipe, PipeTransform } from '@angular/core';

// Identificador do pipe
@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  // Override do método da interface onde será especificado o comportamento do pipe.
  transform(value: any, args?: any): any { 
    let valores = value.split(' '); // Divide a string em mais um bloco quando encontrar um espaço em branco.
    let resultado = [];

    for (let v of valores) {
      resultado.push(this.capitalize(v));
    }

    return resultado.join(' '); // Une os elementos do array com um espaço entre eles.
  }

  capitalize(palavra: string) {
    return palavra[0].toUpperCase() + palavra.substr(1).toLowerCase(); // .substring(indexInicial, indexFinal)
  }

}
