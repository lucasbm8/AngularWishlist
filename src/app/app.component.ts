import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [ //estou declarand items como um tipo de array de WishItem
  new WishItem('Go to the gym'),
  new WishItem('Get groceries', true),
  new WishItem('Get gas'),

  ];

filter: any =() => {};


  get visibleItems(): WishItem[]{
   return this.items.filter(this.filter);

  

  }
}