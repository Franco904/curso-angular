import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PraiasModule } from './pages/praias/praias.module';
import { SearchModule } from './pages/search/search.module';
import { SharedModule } from './pages/shared/shared.module';
import { UnsubscribePocModule } from './pages/unsubscribe-rxjs/unsubscribe-rxjs.module';
import { UploadFileModule } from './pages/upload-file/upload-file.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    PraiasModule,
    SharedModule,
    UnsubscribePocModule,
    UploadFileModule,
    SearchModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
