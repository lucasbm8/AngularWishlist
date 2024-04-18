import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [ //estou declarand items como um tipo de array de WishItem
  ];
  title = 'wishlist';
  
  newWishText='';


  addNewWish(){
    // add new wish to the items array and clear the textbox.
    if(this.newWishText.length != 0){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }}

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}