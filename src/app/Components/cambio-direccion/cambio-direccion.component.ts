import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cambio-direccion',
  templateUrl: './cambio-direccion.component.html',
  styleUrls: ['./cambio-direccion.component.css']
})
export class CambioDireccionComponent implements OnInit {

  id: string;
  info: {
    id_domicilio: number;
    cp: number;
    numero: number;
    calle: string;
    curp: string;
  };

  nameDirec = 'Calle';
  numDirec = 12345;

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {
    this.bdService.llaveActual.subscribe(llave => this.id = llave);
    this.bdService.getDomicilio(this.id).subscribe((data: any) => {
      this.info = data[0];
      this.nameDirec = this.info.calle;
      this.numDirec = this.info.numero;
    });
  }

  onSubmit(form: NgForm){
    const {qnombre, qnumero} = form.value;
    const body = {
      id_domicilio: this.info.id_domicilio,
      cp: this.info.cp,
      numero: qnumero,
      calle: qnombre,
      curp: this.info.curp
    };
    this.bdService.updateDomicilio(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/Busqueda']);
  }

}
