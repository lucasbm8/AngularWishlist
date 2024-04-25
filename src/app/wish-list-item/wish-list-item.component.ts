import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import {EventService} from './../shared/services/EventService';


@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wish!: WishItem;// inicio wishtext indicando que é NÃONULLO por issoutilizo o ponto de exclamação, um truque para o compilador não reclamar. 
 
get cssClasses(){
  // return this.fulfilled? ['strikeout', 'text-muted']  : []; //se o fulfilled for true, ele vai retornar a classe strikeout, se não, ele vai retornar uma string vazia.


  return {
    'strikeout text-muted': this.wish.isComplete //posso retornar um objeto, onde a chave é o nome da classe e o valor é a condição que eu quero que seja verdadeira para que a classe seja aplicada.
  };
} 

  constructor(private events: EventService) { }

  ngOnInit(): void {
  }

  removeWish() {
    this.events.emit('removeWish',this.wish);
    // console.log('Remove wish');
    // console.log('Removing wish', this.wishText);
  }

  //eu quero que toda vez que eu clique na checkbox ele mude o status, então vou pegar o fullfilled e mexer com ele. 
  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete; //aqui eu mudo o estado
    // this.fulfilled = !this.fulfilled; //aqui eu mudo o estado
    // this.fulfilledChange.emit(this.fulfilled); //aqui eu emito o evento 
    
  }


}
