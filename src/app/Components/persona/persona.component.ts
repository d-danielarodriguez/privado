import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  constructor(private bdService: ConexionBdService, private router: Router) {}

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    const {pCurp, psueldo, Nombres, pPaterno, pMaterno, pfechaNac} = form.value;
    const body = {
      curp: pCurp,
      sueldo: psueldo,
      nombre: Nombres,
      ap_pat: pPaterno,
      ap_mat: pMaterno,
      fech_nac: pfechaNac
    };
    this.bdService.createPersona(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }

}
