// Serviço criado para armazenar as operações que, no caso, compõem a regra de negócio

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  calc(num1: number, num2: number, operacao: string): number {
    if (num1 == null ||  num1 === undefined || isNaN(num1)){
      throw new Error('Sem o número 1 eu não consigo operar :/');
    }
    if (num2 == null ||  num2 === undefined || isNaN(num2)){
      throw new Error('Hey! Eu também preciso do número 2, viu? ;)');
    }
    if ( !operacao ){
      throw new Error('Me conta qual operação você quer que eu resolva :D');
    }
    const operacoes = {
      adicao: (a: number, b: number): number => {
        return parseFloat((a + b).toFixed(2));
      },
      subtracao: (a: number, b: number): number => {
        return parseFloat((num1 - num2).toFixed(2));
      },
      divisao: (a: number, b: number): number => {
        if (b === 0){
          throw new Error('Divisão por 0 eu não sei fazer, desculpa :c');
        }
        return a / b;
      },
      multiplica: (a: number, b: number): number => {
        return a * b;
      }
    };
    return operacoes[operacao](num1, num2);
  }
}
