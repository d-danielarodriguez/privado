import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {
  query: { cantEnergGen: any; recursoUtiliza: any; emisionesGen: any; tipoPlanta: any; TipoE: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {cantEnergGen,recursoUtiliza,emisionesGen,tipoPlanta
      ,TipoE} = form.value;
    this.query={cantEnergGen,recursoUtiliza,emisionesGen,tipoPlanta
      ,TipoE};
    console.log(this.query)
  }
}
