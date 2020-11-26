import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colonia',
  templateUrl: './colonia.component.html',
  styleUrls: ['./colonia.component.css']
})
export class ColoniaComponent implements OnInit {
  constructor(private bdService: ConexionBdService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {cCp,cName,cEstado,cCiudad,cLampPublic} = form.value;
    const body = {
      cp:cCp,
      nombre:cName,
      estado:cEstado,
      ciudad:cCiudad,
      num_lamp_publicas:cLampPublic
    };
    this.bdService.createColonia(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
  
}
