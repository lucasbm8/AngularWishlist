import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from './shared/services/EventService';
import { WishService } from './wish.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items! : WishItem[];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
       
       //aqui está declarado o que será feito, porém em eventService é onde de fato vou escrever o que eu quero que aconteça quando o usuário tentar remover.
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    
      }) 
  }

filter: any;

}
//depedency injection é um padrão de projeto que permite que você injete dependências em um objeto, ou seja, você não precisa instanciar um objeto dentro de outro objeto, você pode injetar esse objeto em outro objeto.
