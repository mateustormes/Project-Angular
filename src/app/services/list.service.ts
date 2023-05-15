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

  remove(id: number){
    console.log("Ativando service");
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
    
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
