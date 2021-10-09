import { Pipe, PipeTransform } from '@angular/core';

import { ListaPipe } from './lista.pipe';

@Pipe({
  name: 'filtroListaImpuro',
  pure: false
})
export class FiltroListaImpuroPipe extends ListaPipe {
  // Herda o método transform(...) da classe-mãe ListaPipe
}
