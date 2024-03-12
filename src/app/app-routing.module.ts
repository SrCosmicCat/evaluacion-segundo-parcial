import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'libros', component: LibrosComponent },
  { path:'clientes', component: ClientesComponent },
  { path:'juegos', component: JuegosComponent },
  { path:'about', component: AboutComponent },
  { path:'**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
