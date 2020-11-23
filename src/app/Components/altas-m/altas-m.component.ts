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
    titulo: 'Recibo Form',
    descripcion: '',
    link:'',
    imagen: 'assets/recibo.jpg'
  },
  {
    titulo: 'Persona Form',
    descripcion: '',
    link:'persona',
    imagen: 'assets/person.jpg'
  },
  {
    titulo: 'Colonia Form',
    descripcion: '',
    link:'',
    imagen: 'assets/colo.jpg'
  },
  {
    titulo: 'Domicilio Form',
    descripcion: '',
    link:'',
    imagen: 'assets/domicilio.jpg'
  },
  {
    titulo: 'Dispositivo Form',
    descripcion: '',
    link:'',
    imagen: 'assets/dispo_energ.jpg'
  }

]

@Component({
  selector: 'app-altas-m',
  templateUrl: './altas-m.component.html',
  styleUrls: ['./altas-m.component.css']
})
export class AltasMComponent implements OnInit {
  info = INFORMACION;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(link: string){
    const liga = '/' + link;
    this.router.navigate([liga]);
  }
}