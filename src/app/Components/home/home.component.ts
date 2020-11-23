import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


interface Carta {
  titulo: string;
  descripcion: string;
  link: string;
  imagen: string;
}

const INFORMACION: Carta [] = [
  {
    titulo: 'Sub-menú altas',
    descripcion: 'Genera altas mediante nuestros formularios',
    link:'subAltas',
    imagen: 'assets/altas.jpg'
  },
  {
    titulo: 'Sub-menú busqueda',
    descripcion: 'Consulta, elimina o modifica información',
    link:'',
    imagen: 'assets/upview.jpg'
  }

]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info = INFORMACION;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(link: string){
    const liga = '/' + link;
    this.router.navigate([liga]);
  }

}
