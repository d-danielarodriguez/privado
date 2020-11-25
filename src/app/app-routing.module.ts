import { CambioDireccionComponent } from './Components/cambio-direccion/cambio-direccion.component';
import { CambioPersonaComponent } from './Components/cambio-persona/cambio-persona.component';
import { VistaPersonaComponent } from './Components/vista-persona/vista-persona.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentaComponent } from './Components/alimenta/alimenta.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { HomeComponent } from './Components/home/home.component';
import { VivenComponent } from './Components/viven/viven.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { VistaDireccionComponent } from './Components/vista-direccion/vista-direccion.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Busqueda', component: BusquedaComponent},
  {path: 'Viven', component: VivenComponent},
  {path: 'Alimenta', component: AlimentaComponent},
  {path: 'subAltas', component: AltasMComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'VistaPersona', component: VistaPersonaComponent},
  {path: 'CambioPersona', component: CambioPersonaComponent},
  {path: 'VistaDireccion', component: VistaDireccionComponent},
  {path: 'CambioDireccion', component: CambioDireccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
