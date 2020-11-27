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
    link:'recibo',
    imagen: 'assets/recibo.jpg'
  },
  {
    titulo: 'Persona Form',
    descripcion: 'persona',
    link:'persona',
    imagen: 'assets/person.jpg'
  },
  {
    titulo: 'Colonia Form',
    descripcion: '',
    link:'colonia',
    imagen: 'assets/colo.jpg'
  },
  {
    titulo: 'Domicilio Form',
    descripcion: '',
    link:'domicilio',
    imagen: 'assets/domicilio.jpg'
  },
  {
    titulo: 'Dispositivo Form',
    descripcion: '',
    link:'dispositivo',
    imagen: 'assets/dispo_energ.jpg'
  },
  {
    titulo: 'Planta Form',
    descripcion: '',
    link:'planta',
    imagen: 'assets/planta.jpg'
  },
  {
    titulo: 'Viven',
    descripcion: '',
    link:'Viven',
    imagen: 'assets/viven.jpeg'
  },
  {
    titulo: 'Alimenta',
    descripcion: '',
    link:'Alimenta',
    imagen: 'assets/alimenta.jpeg'
  }
];

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
