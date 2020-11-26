import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  query: { num: any; tipoEnergia: any; dCantEnerg: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {num,tipoEnergia,dCantEnerg} = form.value;
    this.query={num,tipoEnergia,dCantEnerg};
    console.log(this.query)
  }

}
