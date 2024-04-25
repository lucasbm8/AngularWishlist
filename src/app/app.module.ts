import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

import { EventService } from './shared/services/EventService'; //importando o serviço de eventos

//essa arquivo diz tudo que a aplicação precisa pra rodar. 


@NgModule({ //há um objeto que define as 
  declarations: [ //declarações. set de componentes ou directives que pertecem 
  //a esse modo particular. nesse casso é o appcomponente.
    AppComponent, WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent
  ],
  imports: [ //imports são disponíveis para os templares dentro desse modulo
    BrowserModule, 
    FormsModule, //importando isso agora temos acesso ao ngModel
  ],
  providers: [EventService],//providers são objetos que podem ser injetados a partes desse modulo
  bootstrap: [AppComponent]//bootstrap
})
export class AppModule { }
