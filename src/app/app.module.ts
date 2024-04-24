import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

//essa arquivo diz tudo que a aplicação precisa pra rodar. 


@NgModule({ //há um objeto que define as 
  declarations: [ //declarações. set de componentes ou directives que pertecem 
  //a esse modo particular. nesse casso é o appcomponente.
    AppComponent, WishListComponent, AddWishFormComponent
  ],
  imports: [ //imports são disponíveis para os templares dentro desse modulo
    BrowserModule, 
    FormsModule, //importando isso agora temos acesso ao ngModel
  ],
  providers: [],//providers são objetos que podem ser injetados a partes desse modulo
  bootstrap: [AppComponent]//bootstrap
})
export class AppModule { }
