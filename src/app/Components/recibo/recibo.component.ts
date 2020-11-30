import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  constructor(private bdService: ConexionBdService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {pid_domicilio, pfecha, cantEnerg, cantPagar} = form.value;
    const body = {
      id_domicilio: pid_domicilio,
      fecha: pfecha,
      consumo_energia: cantEnerg,
      cant_pagar: cantPagar
    };
    this.bdService.createRecibo(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
}
