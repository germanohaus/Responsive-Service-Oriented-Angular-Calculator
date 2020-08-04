import { CalculadoraService } from './../calculadora.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.tabuadaForm = this.formBuilder.group({
      num1: [1.00, [Validators.required, Validators.pattern(/^\d*(?:[.,]\d{1,2})?$/) ]]
    });
    this.onSubmit();
  }

  onSubmit(): void {
    this.hasError = true;
    this.resultado = [];
    for (let i = 1 ; i <= 10 ; i++){
      this.resultado.push(this.calculadora.calc(
        parseFloat(this.tabuadaForm.controls.num1.value),
        i,
        'multiplica'
      ));
    }
    this.fator = parseFloat(this.tabuadaForm.controls.num1.value);
    this.hasError = false;
  }
}
