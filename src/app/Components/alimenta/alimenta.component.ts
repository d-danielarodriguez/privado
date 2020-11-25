import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alimenta',
  templateUrl: './alimenta.component.html',
  styleUrls: ['./alimenta.component.css']
})
export class AlimentaComponent implements OnInit {
  relacion: { idPlanta: any; codPost: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {idPlanta, codPost} = form.value;
    this.relacion = {idPlanta, codPost};
    console.log(this.relacion);
  }

}
