import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viven',
  templateUrl: './viven.component.html',
  styleUrls: ['./viven.component.css']
})
export class VivenComponent implements OnInit {

  constructor(private bdService: ConexionBdService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {qcurp, qidDirec} = form.value;
    const body = {
      curp: qcurp,
      id_domicilio: qidDirec
    };
    console.log(body);
    this.bdService.createViven(body).subscribe((data: any) => {
      console.log(data);
    });
  }

}
