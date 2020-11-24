import { Router } from '@angular/router';
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
  name = 'Algo';
  apePat = 'apellido paterno';
  apeMat = 'apellido materno';
  date = 'fecha';
  pay = 45;

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {
    this.bdService.llaveActual.subscribe(llave => this.curp = llave);
    this.bdService.getPersona(this.curp).subscribe((data: any) => {
      this.info = data[0];
      this.name = this.info.nombre;
      this.apePat = this.info.ap_pat;
      this.apeMat = this.info.ap_mat;
      this.date = this.info.fech_nac.substring(0, 10);
      this.pay = this.info.sueldo;
    });
  }

  onSubmit(form: NgForm){
    const {qnombre, qap_pat, qap_mat, qfecha_nac, qsueldo} = form.value;
    const body = {
      sueldo: qsueldo,
      nombre: qnombre,
      ap_pat: qap_pat,
      ap_mat: qap_mat,
      fech_nac: qfecha_nac,
      curp: this.info.curp
    };
    this.bdService.updatePersona(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/Busqueda']);
  }

}
