import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

=======
import { HomeComponent } from './Components/home/home.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VivenComponent } from './Components/viven/viven.component';
import { AlimentaComponent } from './Components/alimenta/alimenta.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { HeaderComponent } from './components/header/header.component';
import { ReciboComponent } from './Components/recibo/recibo.component';
import { HomeComponent } from './Components/home/home.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VivenComponent } from './Components/viven/viven.component';
import { AlimentaComponent } from './Components/alimenta/alimenta.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from './Components/persona/persona.component';
import { VistaPersonaComponent } from './Components/vista-persona/vista-persona.component';
import { VistaDireccionComponent } from './Components/vista-direccion/vista-direccion.component';
import { CambioPersonaComponent } from './Components/cambio-persona/cambio-persona.component';
import { CambioDireccionComponent } from './Components/cambio-direccion/cambio-direccion.component';
<<<<<<< HEAD
import { PlantaComponent } from './Components/planta/planta.component';
import { DomicilioComponent } from './Components/domicilio/domicilio.component';
import { DispositivoComponent } from './Components/dispositivo/dispositivo.component';
import { ColoniaComponent } from './Components/colonia/colonia.component';
=======
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195

@NgModule({
  declarations: [
    AppComponent,
    AltasMComponent,
    HeaderComponent,
    HomeComponent,
<<<<<<< HEAD
    ReciboComponent,
=======
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
    BusquedaComponent,
    VivenComponent,
    AlimentaComponent,
    AltasMComponent,
    HeaderComponent,
    PersonaComponent,
    VistaPersonaComponent,
    VistaDireccionComponent,
    CambioPersonaComponent,
<<<<<<< HEAD
    CambioDireccionComponent,
    PlantaComponent,
    DomicilioComponent,
    DispositivoComponent,
    ColoniaComponent

=======
    CambioDireccionComponent
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
