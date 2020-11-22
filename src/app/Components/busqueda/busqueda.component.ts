import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  query: { text: any; tipo: any; };
  personaActive = false;
  direccionActive = false;
  info = [];

  idPrueba = 5;

  constructor(private bdService: ConexionBdService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const {text, tipo} = form.value;
    this.query = {text, tipo};
    if(this.query.tipo === '1'){
      this.personaActive = true;
      this.direccionActive = false;
      this.bdService.buscarPersona(this.query.text).subscribe((data: any) => {
        this.info = data;
        console.log(this.info);
      })
    } else {
      this.personaActive = false;
      this.direccionActive = true;
      this.bdService.buscarDomicilio(this.query.text).subscribe((data: any) => {
        this.info = data;
        console.log(this.info);
      })
    }
  }



  clickVer(curp: string){
    console.log('Click en ver mas', curp);
  }
  clickModificar(curp: string){
    console.log('Click en modificar', curp);
  }
  clickEliminar(curp: string){
    console.log('Click en eliminar', curp);
  }

  verDomicilio(id: number){
    console.log('Click en ver mas', id);
  }
  modificarDomicilio(id: number){
    console.log('Click en modificar', id);
  }
  eliminarDomicilio(id: number){
    console.log('Click en eliminar', id);
  }

}
