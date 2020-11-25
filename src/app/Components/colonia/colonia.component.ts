import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-colonia',
  templateUrl: './colonia.component.html',
  styleUrls: ['./colonia.component.css']
})
export class ColoniaComponent implements OnInit {
  query: { cName: any; cCiudad: any; cEstado: any; cCp: any; cLampPublic: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {cName,cCiudad,cEstado,cCp
      ,cLampPublic} = form.value;
    this.query={cName,cCiudad,cEstado,cCp
      ,cLampPublic};
    console.log(this.query)
  }
}
