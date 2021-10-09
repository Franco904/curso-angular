import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaFiltro'
})
export class ListaPipe implements PipeTransform {

  // value: Lista de animais (array) e args é a sequência após ": ".
  transform(value: any, args?: any): any { 

    if (value.length === 0 || args === '') {
      return value;
    }

    // Sequência de letras para usar como filtro. Transforma para minúscula para não fazer distinção.
    const seqFiltrada = args.toLocaleString().toLocaleLowerCase(); 

    // Se a string aparece no elemento, o elemento permanece na lista.
    return value.filter(
      (v: any) => v.toLocaleLowerCase().indexOf(seqFiltrada) != -1 
      );
  }
}
