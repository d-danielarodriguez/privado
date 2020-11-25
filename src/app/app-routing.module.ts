import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { ReciboComponent } from './Components/recibo/recibo.component';
import { PlantaComponent } from './Components/planta/planta.component';
import { DomicilioComponent } from './Components/domicilio/domicilio.component';
import { DispositivoComponent } from './Components/dispositivo/dispositivo.component';
import { ColoniaComponent } from './Components/colonia/colonia.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'subAltas', component: AltasMComponent},
  {path: 'persona', component:PersonaComponent},
  {path: 'recibo', component:ReciboComponent},
  {path: 'planta', component:PlantaComponent},
  {path: 'domicilio', component:DomicilioComponent},
  {path: 'dispositivo', component:DispositivoComponent},
  {path: 'colonia', component:ColoniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
