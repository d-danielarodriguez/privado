import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  query: { Calle: any; Numero: any; CP: any; tieneErnergReno: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {Calle,Numero,CP,tieneErnergReno} = form.value;
    this.query={Calle,Numero,CP,tieneErnergReno};
    console.log(this.query)
  }
}
