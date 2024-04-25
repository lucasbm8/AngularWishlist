import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from './shared/services/EventService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [ //estou declarando items como um tipo de array de WishItem
  new WishItem('Go to the gym'),
  new WishItem('Get groceries', true),
  new WishItem('Get gas'),

  ];

  constructor() {
    events.listen('removeWish', (wish: any) => {
       //aqui está declarado o que será feito, porém em eventService é onde de fato vou escrever o que eu quero que aconteça quando o usuário tentar remover.
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    
      })
  }

filter: any;

}