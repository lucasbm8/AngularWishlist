import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [ //estou declarand items como um tipo de array de WishItem
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')

  ];
  title = 'wishlist';
}