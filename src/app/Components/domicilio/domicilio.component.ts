import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {

  constructor(private bdService: ConexionBdService, private router: Router) { }
  // constructor(private bdService: ConexionBdService) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {CP, Numero, Calle, curpD} = form.value;
    const body = {
      cp: CP,
      numero: Numero,
      calle: Calle,
      curp: curpD
    };
    this.bdService.createDomicilio(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
}
