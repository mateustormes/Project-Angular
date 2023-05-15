import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{

  animals: Animal[] = []

  animal: Animal = {
    name: "Turca",
    type:"Dog",
    age: 4,
  };

  animalDetails = '';
  
  constructor(private listService: ListService){
    this.getAnimals();
  }

  ngOnInit(): void {
    
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo Animal..");
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
