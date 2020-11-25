import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  query: { Nombres: any; pPaterno: any; pMaterno: any; pfechaNac: any; pCurp: any; Sexo: any; sueldo:any;};

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    const {Nombres,pPaterno,pMaterno,pfechaNac
      ,pCurp,Sexo,sueldo} = form.value;
    this.query={Nombres,pPaterno,pMaterno,pfechaNac
      ,pCurp,Sexo,sueldo};
    console.log(this.query)
  }

}
