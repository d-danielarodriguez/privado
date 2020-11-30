import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alimenta',
  templateUrl: './alimenta.component.html',
  styleUrls: ['./alimenta.component.css']
})
export class AlimentaComponent implements OnInit {

  constructor(private bdService: ConexionBdService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {qidPlanta, qcodPost} = form.value;
    const body = {
      id_planta: qidPlanta,
      cp: qcodPost
    };
    this.bdService.createAlimenta(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }

}
