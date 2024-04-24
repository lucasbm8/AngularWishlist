import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';

const filters = [ // arranjo filtros

  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];
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


  listFilter : any = '0';

  title = 'wishlist';
  
  newWishText='';

  get visibleItems(): WishItem[]{
   return this.items.filter(filters[this.listFilter]);
  }


  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }


  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}