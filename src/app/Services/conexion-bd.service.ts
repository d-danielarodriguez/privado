import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionBdService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPersona(){
    const link = `${this.url}/get_persona`;
    return this.http.get(link).pipe(map((data: any) => data.array));
  }
}
