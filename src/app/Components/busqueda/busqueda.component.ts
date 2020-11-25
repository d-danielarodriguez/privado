import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  query: { text: any; tipo: any; };
  personaActive = false;
  direccionActive = false;
  errorActive = false;
  info = [];

  idPrueba = 5;

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const {text, tipo} = form.value;
    this.query = {text, tipo};
    if (this.query.tipo === '1'){
      this.personaActive = true;
      this.direccionActive = false;
      this.errorActive = false;
      this.bdService.buscarPersona(this.query.text).subscribe((data: any) => {
        this.info = data;
      });
    } else if (this.query.tipo === '2') {
      this.personaActive = false;
      this.direccionActive = true;
      this.errorActive = false;
      this.bdService.buscarDomicilio(this.query.text).subscribe((data: any) => {
        this.info = data;
      });
    } else {
      this.errorActive = true;
    }
  }

  verPersona(curp: string){
    this.bdService.cambiarLlave(curp);
    this.router.navigate(['/VistaPersona']);
  }
  modificarPersona(curp: string){
    this.bdService.cambiarLlave(curp);
    this.router.navigate(['/CambioPersona']);
  }
  eliminarPersona(curp: string){
    this.bdService.deletePersona(curp).subscribe((data: any) => {
      console.log(data);
    });
  }

  verDomicilio(id: number){
    this.bdService.cambiarLlave(id.toString());
    this.router.navigate(['/VistaDireccion']);
  }
  modificarDomicilio(id: number){
    this.bdService.cambiarLlave(id.toString());
    this.router.navigate(['/CambioDireccion']);
  }
  eliminarDomicilio(id: number){
    this.bdService.deleteDomicilio(id.toString()).subscribe((data: any) => {
      console.log(data);
    });
  }

}
