import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from './../shared/services/EventService';


@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wishText!: string;// inicio wishtext indicando que é NÃONULLO por issoutilizo o ponto de exclamação, um truque para o compilador não reclamar. 
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

get cssClasses(){
  // return this.fulfilled? ['strikeout', 'text-muted']  : []; //se o fulfilled for true, ele vai retornar a classe strikeout, se não, ele vai retornar uma string vazia.


  return {
    'strikeout text-muted': this.fulfilled//posso retornar um objeto, onde a chave é o nome da classe e o valor é a condição que eu quero que seja verdadeira para que a classe seja aplicada.
  };
} 

  constructor() { }

  ngOnInit(): void {
  }

  removeWish() {
    events.emit('removeWish',this.wishText);
    console.log('Remove wish');
    console.log('Removing wish', this.wishText);
  }

  //eu quero que toda vez que eu clique na checkbox ele mude o status, então vou pegar o fullfilled e mexer com ele. 
  toggleFulfilled() {
    this.fulfilled = !this.fulfilled; //aqui eu mudo o estado
    this.fulfilledChange.emit(this.fulfilled); //aqui eu emito o evento 
    
  }


}
