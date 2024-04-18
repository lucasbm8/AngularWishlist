import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=[
    new WishItem('Learn Angular', true),
    new WishItem('get Coffee', true),
    new WishItem('Secar gelo'),
  ]
  title = 'wishlist3';
}
