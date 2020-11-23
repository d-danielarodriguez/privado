import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AltasMComponent } from './Components/altas-m/altas-m.component';
import { HeaderComponent } from './Components/header/header.component';
import { PersonaComponent } from './Components/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AltasMComponent,
    HeaderComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
