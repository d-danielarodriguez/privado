import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consumo-mes',
  templateUrl: './consumo-mes.component.html',
  styleUrls: ['./consumo-mes.component.css']
})
export class ConsumoMesComponent implements OnInit {

  meses = [
    {mes: 'Enero', num: 1},
    {mes: 'Febrero', num: 2},
    {mes: 'Marzo', num: 3},
    {mes: 'Abril', num: 4},
    {mes: 'Mayo', num: 5},
    {mes: 'Junio', num: 6},
    {mes: 'Julio', num: 7},
    {mes: 'Agosto', num: 8},
    {mes: 'Septiembre', num: 9},
    {mes: 'Octubre', num: 10},
    {mes: 'Noviembre', num: 11},
    {mes: 'Diciembre', num: 12}
  ];

  mesSelect = 1;
  anioSelect = 2020;
  info = [];

  existe = false;
  noExiste = false;

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {
    const body = {año: 2020, mes: 2};
  }

  onSubmit(){
    const body = {
      mes: parseInt(this.mesSelect.toString(), 10),
      año: this.anioSelect
    };
    this.bdService.getConsumoMes(body).subscribe((data: any) => {
      console.log(data[0]);
      this.info = data[0];
      if (this.info.length > 0){
        this.existe = true;
        this.noExiste = false;
      } else {
        this.existe = false;
        this.noExiste = true;
      }
    });
  }

  regresar(){
    this.router.navigate(['/Home']);
  }

}
