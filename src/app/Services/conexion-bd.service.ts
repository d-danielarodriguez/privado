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

  createColonia(body: any){
    const link = `${this.url}/put_colonia`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  createDispositivo(body: any){
    const link = `${this.url}/put_disp`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  createDomicilio(body: any){
    const link = `${this.url}/put_domicilio`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }// no quiere dar de alta, errores en el html consola

  createPersona(body: any){
    const link = `${this.url}/put_persona`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }// no quiere dar de alta a la persona

  createPlanta(body: any){
    const link = `${this.url}/put_planta`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  createRecibo(body: any){
    const link = `${this.url}/put_recibo`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

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
    return this.http.post(link, body).pipe(map((data: any) => data.array));
  }

  deletePersona(ncurp: any){
    const link = `${this.url}/delete_persona`;
    const body = {curp: ncurp};
    return this.http.post(link, body).pipe(map((data: any) => data.array));
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
    return this.http.post(link, body).pipe(map((data: any) => data.array));
  }

  deleteDomicilio(id: string){
    const link = `${this.url}/delete_domicilio`;
    const body = {id_domicilio: id};
    return this.http.post(link, body).pipe(map((data: any) => data.array));
  }

  createViven(body: any){
    const link = `${this.url}/create_viven`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  createAlimenta(body: any){
    const link = `${this.url}/create_alimenta`;
    return this.http.put(link, body).pipe(map((data: any) => data.array));
  }

  getNumeroAlimenta(){
    const link = `${this.url}/get_numero_alimenta`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }

  getConsumoMes(body: any){
    const link = `${this.url}/get_consumo_mes`;
    return this.http.post(link, body).pipe(map((data: any) => data.array));
  }

  // Funciones para compartir datos entre componentes
  cambiarLlave(llave: string){
    this.llaveFuente.next(llave);
  }
}
