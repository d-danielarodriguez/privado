import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { PersonaComponent } from './Components/persona/persona.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'subAltas', component: AltasMComponent},
  {path: 'persona', component:PersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
