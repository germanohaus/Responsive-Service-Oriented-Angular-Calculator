// Este serviço foi uma maneira que encontrei de tratar os erros de forma independente do componente onde ele acontece
// Abaixo importo só o que vou precisar para mostrar os erros, no caso o Dialog padrão, e o estilizado do Angular Material
// Como o angular já captura os erros normalmente, eu dei um implement no ErroHandler.
// Eu fiz isso por que ainda uso a implementação padrão, porém nesse sistema fazia sentido que toda mensagem de erro capturada-
// - fosse apresentada pro usuário pra ele entender que precisa intervir pra corrigir.

import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { Injectable, ErrorHandler } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{
  constructor(private metDialog: MatDialog) { }

  handleError(error): void{
    console.error(error);
    this.metDialog.open(
      DialogMessageComponent,
      { // mensagem padrão de erro, do tipo warning, e uma classe que criei específica pro html do componente.
        data: {title: 'Ops, temos um probleminha', message: error.message, kind: 'warn' },
        panelClass: 'dialogCustom',
        minWidth: 300 // e um tamanho mínimo para garantir que a mensagem está legível.
      }
    );
  }
}
