import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [ // arranjo filtros

  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;

  @Output() filterChange = new EventEmitter<any>(); //quando coloco Change no final da variável, o Angular entende que é estão linkados.

  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }

}
