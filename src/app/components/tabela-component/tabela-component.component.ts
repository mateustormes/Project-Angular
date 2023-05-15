import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nomes } from 'src/app/interfaces/Nomes';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-tabela-component',
  templateUrl: './tabela-component.component.html',
  styleUrls: ['./tabela-component.component.css']
})
export class TabelaComponentComponent implements OnInit{

    private apiUrlNomes = "http://localhost:3000/nomes";
    dados: Nomes[] = [];
    constructor(private listService: ListService){
      this.getAllNomes();
    }

    ngOnInit(): void {
      
    }

    
    getAllNomes(): void{
      this.listService.getAllNomes().subscribe((nomes) => (this.dados = nomes));
    }
}
