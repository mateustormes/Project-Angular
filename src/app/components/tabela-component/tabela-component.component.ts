import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-component',
  templateUrl: './tabela-component.component.html',
  styleUrls: ['./tabela-component.component.css']
})
export class TabelaComponentComponent implements OnInit{

    dados: any[] = [
      {id: 1, nome: 'Mateus', sobrenome: 'Tormes', idade: '25'},
      {id: 2, nome: 'Luiza', sobrenome: 'Tormes', idade: '65'},
      {id: 3, nome: 'Mariah', sobrenome: 'Tormes', idade: '12'},
    ];
    constructor(){}

    ngOnInit(): void {
      
    }
}
