import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PraiasModule } from './pages/praias/praias.module';
import { SharedModule } from './pages/shared/shared.module';
import { UnsubscribePocModule } from './pages/unsubscribe-rxjs/unsubscribe-rxjs.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PraiasModule,
    SharedModule,
    UnsubscribePocModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
