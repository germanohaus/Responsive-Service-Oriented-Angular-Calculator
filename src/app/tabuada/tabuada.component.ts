import { CalculadoraService } from './../calculadora.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importando formgroup, builder e validadores que vou implementar abaixo
// Mas, essencialmente, são os componentes que preciso pois usei forms e botões de submit nas páginas
// Por isso, estou usando componentes específicos para isso. Explico melhor abaixo.

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.scss']
})
export class TabuadaComponent implements OnInit {

  public tabuadaForm: FormGroup;
  public hasError: boolean;
  public resultado: number[];
  public fator: number;

  constructor( public calculadora: CalculadoraService, private formBuilder: FormBuilder ) { }

  // O regex abaixo eu peguei na internet depois de testar uns 42 e perceber que esse funciona rs
  // Mas, essencialmente o validator normal torna o num1 obrigatório, e o regex evita que o usuário digite coisas estranhas
  ngOnInit(): void {
    this.tabuadaForm = this.formBuilder.group({
      num1: [1.00, [Validators.required, Validators.pattern(/^\d*(?:[.,]\d{1,2})?$/) ]]
    });
    this.onSubmit();
  }

  // como estou trabalhando com forms, faço muita coisa no submit.
  // a var hasError eu faço a gambiarra pra garantir que, se tiver erro, ele aconteceu no escopo da função que estou verificando
  // faço também conversão pra float pra garantir integridade pois sem tratamento o valor pode vir como string.
  // Consigo usar as funções de calculadora pois implementei ali em cima no construtor.
  // acesso os elementos do form tabuadaForm diretamente aqui, mais uma vez pra garantir integridade.
  onSubmit(): void {
    this.hasError = true;
    this.resultado = [];
    for (let i = 1 ; i <= 10 ; i++){
      this.resultado.push(this.calculadora.calc(
        parseFloat(this.tabuadaForm.controls.num1.value),
        i,
        'multiplica' // nome da função implementada no serviço de calculadora
      ));
    }
    this.fator = parseFloat(this.tabuadaForm.controls.num1.value);
    this.hasError = false;
  }
}
