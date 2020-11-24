import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cambio-persona',
  templateUrl: './cambio-persona.component.html',
  styleUrls: ['./cambio-persona.component.css']
})
export class CambioPersonaComponent implements OnInit {

  curp: string;
  info: {
    curp: string;
    sueldo: number;
    nombre: string;
    ap_pat: string;
    ap_mat: string;
    fech_nac: string;
  };
  query: { nombre: any; fecha_nac: any; sueldo: any; };
  name = 'Algo';
  date = 'fecha';
  pay = 45;

  constructor(private bdService: ConexionBdService) { }

  ngOnInit(): void {
    this.bdService.llaveActual.subscribe(llave => this.curp = llave);
    this.bdService.getPersona(this.curp).subscribe((data: any) => {
      this.info = data[0];
      this.name = this.info.nombre;
      this.date = this.info.fech_nac.substring(0, 10);
      this.pay = this.info.sueldo;
    });
  }

  onSubmit(form: NgForm){
    const {nombre, fecha_nac, sueldo} = form.value;
    this.query = {nombre, fecha_nac, sueldo};
    console.log(this.query);
  }

}
