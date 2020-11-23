import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentaComponent } from './Components/alimenta/alimenta.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { HomeComponent } from './Components/home/home.component';
import { VivenComponent } from './Components/viven/viven.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { PersonaComponent } from './Components/persona/persona.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Busqueda', component: BusquedaComponent},
  {path: 'Viven', component: VivenComponent},
  {path: 'Alimenta', component: AlimentaComponent},
  {path: 'subAltas', component: AltasMComponent},
  {path: 'persona', component:PersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
