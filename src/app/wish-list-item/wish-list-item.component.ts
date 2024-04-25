import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';



@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wishText!: string;// inicio wishtext indicando que é NÃONULLO por issoutilizo o ponto de exclamação, um truque para o compilador não reclamar. 

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  //eu quero que toda vez que eu clique na checkbox ele mude o status, então vou pegar o fullfilled e mexer com ele. 
  toggleFulfilled() {
    this.fulfilled = !this.fulfilled; //aqui eu mudo o estado
    this.fulfilledChange.emit(this.fulfilled); //aqui eu emito o evento 
    
  }


}
