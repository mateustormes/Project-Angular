import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nomes } from '../interfaces/Nomes';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "http://localhost:3000/animals";
  private apiUrlNomes = "http://localhost:3000/nomes";


  constructor(private http:HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    console.log("Ativando service");
    return animals.filter((a)=> animal.name !== a.name);
    
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  getAllNomes(): Observable<Nomes[]>{
    return this.http.get<Nomes[]>(this.apiUrlNomes);
  }

  
}
