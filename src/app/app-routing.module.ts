import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './components/gestion/gestion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [

  {path:'', pathMatch:"full", component: InicioComponent},
  {path:'productos', component: ProductosComponent},
  {path:'gestion', component: GestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
