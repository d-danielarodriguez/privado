import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ConexionBdService } from './../../Services/conexion-bd.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {
  query: { fecha: any; cantEnerg: any; cantPagar: any; };

  constructor() { }
 //constructor(private bdService: ConexionBdService) {}
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
    const {fecha, cantEnerg, cantPagar} = form.value;
    this.query={fecha, cantEnerg, cantPagar};
    console.log(this.query)
  }
}
