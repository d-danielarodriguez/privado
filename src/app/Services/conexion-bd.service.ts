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

  updatePersona(body: any){
    const link = `${this.url}/update_persona`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  deletePersona(curp: any){
    const link = `${this.url}/delete_persona/${curp}`;
    return this.http.delete(link).pipe(map((data: any) => data.array));
  }

  buscarDomicilio(nombre: string){
    const link = `${this.url}/buscar_domicilio/${nombre}`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }
  
  getDomicilio(id: string){
    const link = `${this.url}/get_domicilio/${id}`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }

  updateDomicilio(body: any){
    const link = `${this.url}/update_domicilio`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  deleteDomicilio(id: string){
    const link = `${this.url}/delete_domicilio/${id}`;
    return this.http.delete(link).pipe(map((data: any) => data.array));
  }

  // Funciones para compartir datos entre componentes
  cambiarLlave(llave: string){
    this.llaveFuente.next(llave);
  }
}
