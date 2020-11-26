import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {
  query: { fecha: any; cantEnerg: any; cantPagar: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {fecha, cantEnerg, cantPagar} = form.value;
    this.query={fecha, cantEnerg, cantPagar};
    console.log(this.query)
  }
}
