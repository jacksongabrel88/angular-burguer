import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazer-hamburguer',
  templateUrl: './fazer-hamburguer.component.html',
  styleUrls: ['./fazer-hamburguer.component.css']
})
export class FazerHamburguerComponent implements OnInit {

  salvarHamburguer($nome, $descricao, $ingredientes) {
    const boxes_hamburgueres = document.getElementById('boxes-hamburgueres');

    const htmllista = this.separaIngredientes($ingredientes);

    let htmlcontent = '<div class="col-sm-6 col-md-4">';
    htmlcontent += '<div class="thumbnail">';
    htmlcontent += '<div class="caption">';
    htmlcontent += '<h3>' + $nome + '</h3>';
    htmlcontent += '<p>' + $descricao + '</p>';
    htmlcontent += '<div class="well">';
    htmlcontent += '<p>Ingredientes</p>';
    htmlcontent += '<p>' + htmllista + '</p>';
    htmlcontent += '</div>';
    htmlcontent += '<p><a href="#" class="btn btn-primary" role="button">Quero</a></p>';
    htmlcontent += '</div>';
    htmlcontent += '</div>';
    htmlcontent += '</div>';

    boxes_hamburgueres.innerHTML += htmlcontent;

  }

  separaIngredientes( $ingredientes ) {
    const arr_ingredientes = $ingredientes.split(',');

    let htmllista = '<ul>';

    arr_ingredientes.forEach(function(ingrediente){
      htmllista += '<li>' + ingrediente + '</li>';
    });

    htmllista += '</ul>';

    return htmllista;
  }

  constructor() { }

  ngOnInit() {

   }

}
