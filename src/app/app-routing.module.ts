import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambioDireccionComponent } from './Components/cambio-direccion/cambio-direccion.component';
import { CambioPersonaComponent } from './Components/cambio-persona/cambio-persona.component';
import { VistaPersonaComponent } from './Components/vista-persona/vista-persona.component';
import { AlimentaComponent } from './Components/alimenta/alimenta.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { HomeComponent } from './Components/home/home.component';
import { VivenComponent } from './Components/viven/viven.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { ReciboComponent } from './Components/recibo/recibo.component';
import { PlantaComponent } from './Components/planta/planta.component';
import { DomicilioComponent } from './Components/domicilio/domicilio.component';
import { DispositivoComponent } from './Components/dispositivo/dispositivo.component';
import { ColoniaComponent } from './Components/colonia/colonia.component';
import { VistaDireccionComponent } from './Components/vista-direccion/vista-direccion.component';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Busqueda', component: BusquedaComponent},
  {path: 'Viven', component: VivenComponent},
  {path: 'Alimenta', component: AlimentaComponent},
  {path: 'subAltas', component: AltasMComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'recibo', component: ReciboComponent},
  {path: 'planta', component: PlantaComponent},
  {path: 'domicilio', component: DomicilioComponent},
  {path: 'dispositivo', component: DispositivoComponent},
  {path: 'colonia', component: ColoniaComponent},
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
