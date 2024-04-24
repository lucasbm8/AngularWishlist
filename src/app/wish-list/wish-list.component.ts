import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishes: WishItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
