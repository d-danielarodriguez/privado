import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-persona',
  templateUrl: './vista-persona.component.html',
  styleUrls: ['./vista-persona.component.css']
})
export class VistaPersonaComponent implements OnInit {

  curp: string;
  info: {
    curp: string;
    sueldo: number;
    nombre: string;
    ap_pat: string;
    ap_mat: string;
    fech_nac: string;
  };

  constructor(private bdService: ConexionBdService) {}

  ngOnInit(): void {
    this.bdService.llaveActual.subscribe(llave => this.curp = llave);
    this.bdService.getPersona(this.curp).subscribe((data: any) => {
      this.info = data[0];
      this.info.fech_nac = this.info.fech_nac.substring(0, 10);
    });
  }

}
