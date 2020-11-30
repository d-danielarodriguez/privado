import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viven',
  templateUrl: './viven.component.html',
  styleUrls: ['./viven.component.css']
})
export class VivenComponent implements OnInit {

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {qcurp, qidDirec} = form.value;
    const body = {
      curp: qcurp,
      id_domicilio: qidDirec
    };
    this.bdService.createViven(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }

}
