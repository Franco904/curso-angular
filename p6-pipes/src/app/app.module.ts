import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { ListaPipe } from './pipes/lista.pipe';
import { FiltroListaComponent } from './filtro-lista/filtro-lista.component';
import { FiltroListaImpuroPipe } from './pipes/filtro-lista-impuro.pipe';
import { FiltroListaImpuroComponent } from './filtro-lista-impuro/filtro-lista-impuro.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroListaComponent,
    ListaPipe,
    FiltroListaImpuroPipe,
    FiltroListaImpuroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService], // providers para a injeção do LOCALE_ID
    //   useFactory: (settingsService: { getLocale: () => any; }) => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
