import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

// import normal pra usar os dialogs estilizados do angular material
// nada de muito complexo aqui, é só um componente que criei qwwue, nesse projeto, só uso pras mensagens de erro
// mas, achei melhor criar um componente genérico pois favorece no caso de futura reutilização pra algum outro fim

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    }

  ngOnInit(): void {
  }

}
