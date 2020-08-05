import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Aqui o router sendo importado pois mais abaixo vou específicar as propriedades das'abas' do sistema

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;

  // agora sim, no construtor, os parâmetros das 'abas' sendo colocados no array.
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Calculadora',
        link: './calculadora',
        index: 0
      },
      {
        label: 'Tabuada',
        link: './tabuada',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
