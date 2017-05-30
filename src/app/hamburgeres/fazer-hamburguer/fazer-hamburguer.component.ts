import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazer-hamburguer',
  templateUrl: './fazer-hamburguer.component.html',
  styleUrls: ['./fazer-hamburguer.component.css']
})
export class FazerHamburguerComponent implements OnInit {

  constructor() { }

  nome_hamburguer: string = "";
  descricao_hamburguer: string = "";

  ngOnInit() {

        var btn_salvar_hamburguer = document.getElementById("salvar-hamburguer");
        btn_salvar_hamburguer.addEventListener("click", function(){
        })
   }

}
