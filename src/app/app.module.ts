import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PlantaComponent } from './Components/planta/planta.component';
import { DomicilioComponent } from './Components/domicilio/domicilio.component';
import { DispositivoComponent } from './Components/dispositivo/dispositivo.component';
import { ColoniaComponent } from './Components/colonia/colonia.component';

@NgModule({
  declarations: [
    AppComponent,
    AltasMComponent,
    HeaderComponent,
    HomeComponent,
    ReciboComponent,
    BusquedaComponent,
    VivenComponent,
    AlimentaComponent,
    AltasMComponent,
    HeaderComponent,
    PersonaComponent,
    VistaPersonaComponent,
    VistaDireccionComponent,
    CambioPersonaComponent,
    CambioDireccionComponent,
    PlantaComponent,
    DomicilioComponent,
    DispositivoComponent,
    ColoniaComponent

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
