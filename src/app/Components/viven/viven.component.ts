import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viven',
  templateUrl: './viven.component.html',
  styleUrls: ['./viven.component.css']
})
export class VivenComponent implements OnInit {
  relacion: { curp: any; idDirec: any; };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {curp, idDirec} = form.value;
    this.relacion = {curp, idDirec};
    console.log(this.relacion);
  }

}
