import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  query: { num: any; tipoEnergia: any; dCantEnerg: any; };

  constructor(private bdService: ConexionBdService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {id_domicilioo, dCantEnerg, tipoEnergia} = form.value;
    const body = {
      id_domicilio: id_domicilioo,
      energia_generada: dCantEnerg,
      tipo_renovable: tipoEnergia
    };
    this.bdService.createDispositivo(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
}
