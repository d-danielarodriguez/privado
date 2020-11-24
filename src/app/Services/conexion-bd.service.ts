import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionBdService {

  private llaveFuente = new BehaviorSubject('llave');
  llaveActual = this.llaveFuente.asObservable();

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  buscarPersona(nombre: string){
    const link = `${this.url}/buscar_persona/${nombre}`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }

  getPersona(curp: string){
    const link = `${this.url}/get_persona/${curp}`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }

  buscarDomicilio(nombre: string){
    const link = `${this.url}/buscar_domicilio/${nombre}`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }

  // Funciones para compartir datos entre componentes
  cambiarLlave(llave: string){
    this.llaveFuente.next(llave);
  }
}
