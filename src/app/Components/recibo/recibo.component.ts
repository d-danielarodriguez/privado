import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {
 
  constructor(private bdService: ConexionBdService, private router: Router) {}
  ngOnInit(): void {
  }
  //this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
    //this.postId = data.id;
  //})
  //ngOnInit(): void {
    //this.bdService.llaveActual.subscribe(llave => this.id = llave);
    //this.bdService.getDomicilio(this.id).subscribe((data: any) => {
      //this.info = data[0];
    //});
  //}
  onSubmit(form: NgForm){
    const {id_domicilio,fecha, cantEnerg, cantPagar} = form.value;
    const body = {
      id_domicilio: id_domicilio,
      fecha: fecha,
      consumo_energia:cantEnerg,
      cant_pagar: cantPagar
    };
    this.bdService.createRecibo(body).subscribe((data: any) => {
      console.log(data);
    });
    this.router.navigate(['/subAltas']);
  }
}
