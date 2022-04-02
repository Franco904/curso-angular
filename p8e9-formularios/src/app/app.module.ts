import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraiasComponent } from './pages/praias/praias/praias.component';

@NgModule({
  declarations: [
    AppComponent,
    PraiasComponent
  ],
  imports: [
    BrowserModule,
    TemplateFormModule,
    DataFormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
