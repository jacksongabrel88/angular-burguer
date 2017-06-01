import { HamburgeresService } from './hamburgeres.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hamburgeres',
  templateUrl: './hamburgeres.component.html',
  styleUrls: ['./hamburgeres.component.css']
})
export class HamburgeresComponent implements OnInit {

  tituloSecao = '';

  hamburgeres;

  botaoQuero() {
    alert('Parabéns, mas querer não é poder!');
  }

  constructor( private hamburgeresService: HamburgeresService ) {
    this.tituloSecao = 'Escolha seu hamburger';

    this.hamburgeres = this.hamburgeresService.getHamburgeres();

   }

  ngOnInit() {
  }

}
