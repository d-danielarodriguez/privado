import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-direccion',
  templateUrl: './vista-direccion.component.html',
  styleUrls: ['./vista-direccion.component.css']
})
export class VistaDireccionComponent implements OnInit {

  id: string;
  info: {
    id_domicilio: number;
    cp: number;
    numero: number;
    calle: string;
    curp: string;
  };

  constructor(private bdService: ConexionBdService) { }

  ngOnInit(): void {
    this.bdService.llaveActual.subscribe(llave => this.id = llave);
    this.bdService.getDomicilio(this.id).subscribe((data: any) => {
      this.info = data[0];
    });
  }

}
