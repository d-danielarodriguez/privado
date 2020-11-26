import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private bdService: ConexionBdService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {tipoPlanta,recursoUtiliza,TipoE,cantEnergGen,emisionesGen,id_domicilio} = form.value;
    const body = {
      tipo_renovable:TipoE,
      recurso_alim: recursoUtiliza,
      tipo_planta:tipoPlanta,
      cant_energ_gen: cantEnergGen,
      emisiones_generadas:emisionesGen ,
      id_domicilio: id_domicilio
    };
    this.bdService.createPlanta(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
}
