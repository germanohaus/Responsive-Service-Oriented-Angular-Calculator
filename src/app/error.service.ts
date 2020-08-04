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
      {
        data: {title: 'Ops, temos um probleminha', message: error.message, kind: 'warn' },
        panelClass: 'dialogCustom',
        minWidth: 300
      }
    );
  }
}
