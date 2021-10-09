import { CursosModule } from './cursos/cursos.module';
import { CriarCursosModule } from './criar-cursos/criar-cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
