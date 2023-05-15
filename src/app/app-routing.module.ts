import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TabelaComponentComponent } from './components/tabela-component/tabela-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: "tabela", component: TabelaComponentComponent },
  {path: "parent", component: ParentDataComponent },
  {path: "directive", component: DirectivesComponent },
  {path: "ifrender", component: IfRenderComponent },
  {path: "eventos", component: EventosComponent },
  {path: "emitter", component: EmitterComponent },
  {path: "listRender", component: ListRenderComponent },
  {path: "pipes", component: PipesComponent },
  {path: "binding", component: TwoWayBindingComponent} 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
