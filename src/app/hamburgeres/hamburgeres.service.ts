import { Injectable } from '@angular/core';

@Injectable()
export class HamburgeresService {

  constructor() { }

  getHamburgeres(){

    var hamburgeres = [ 
      { nome: 'Cheeseburguer', ingredientes: [ '2 pães', '1 queijo', '1 hamburger' ], descricao: 'Um hamburguer simples sem verdura' }, 
      { nome: 'TriploCheese', ingredientes: [ '2 pães', '3 queijos', '2 hamburger' ], descricao: 'Um hamburguer com tres queijos queijosos' }, 
      { nome: 'SupremoBurguer', ingredientes: [ '2 pães', '3 queijo', '2 hamburger', '1 rodela de tomate' ], descricao: 'Um hamburguer supremo para pessoas supremas'}, 
      { nome: 'Burgo Bolado', ingredientes: [ '1/2 pão', '1/2 queijo', '1/2 hamburger' ], descricao: 'Um hamburguer bolado para que não come muito e vive bolado'} 
    ]

    return hamburgeres;

  }

}
