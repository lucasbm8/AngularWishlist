//aqui é onde vai ser de fato implementada a lógica, o que vai ser feito quando o usuário clicar no botão de remover, ou quando ele clicar na checkbox.
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs"; //rxjs é uma biblioteca que permite trabalhar com programação reativa, ou seja, trabalhar com eventos, streams de dados, etc. http etc.
//subject é um tipo de observable que permite emitir valores, ou seja, ele é um tipo de observable que permite emitir valores, e também é um observer, ou seja, ele pode receber valores de outros observables.
//observable é uma coleção de valores que podem ser emitidos ao longo do tempo.

@Injectable()
export class EventService {
    private subjct = new Subject(); //um evento é uma mensagem, 

    emit(eventName: string, payload: any){
  
        this.subjct.next({eventName, payload}); //chamamos next que irá pegar o nome e o payload, quaisquer objeto que se inscreve num objeto evento terá um objeto de retorno com essas duas propriedades

    }

    listen(eventName: string, callback: (event: any) => void){
        this.subjct.asObservable().subscribe((nextObj: any)=>{
        
            if(eventName === nextObj.eventName){
                callback(nextObj.payload);
            }
        });  //esse metodo subscribe por padrão aceita uma funcção de callback que irá aceitar qualquer coisa que passamos para o next.

    }
}
