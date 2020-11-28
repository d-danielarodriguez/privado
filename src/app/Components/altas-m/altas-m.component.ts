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
    descripcion: 'Alta para el formato "Recibo", recuerda verificar antes de un subbmit',
    link:'recibo',
    imagen: 'assets/recibo.jpg'
  },
  {
    titulo: 'Persona Form',
    descripcion: 'Alta para el formato "Persona", recuerda verificar antes de un subbmit',
    link:'persona',
    imagen: 'assets/person.jpg'
  },
  {
    titulo: 'Colonia Form',
    descripcion: 'Alta para el formato "Colonia", recuerda verificar antes de un subbmit',
    link:'colonia',
    imagen: 'assets/colo.jpg'
  },
  {
    titulo: 'Domicilio Form',
    descripcion: 'Alta para el formato "Domicilio", recuerda verificar antes de un subbmit',
    link:'domicilio',
    imagen: 'assets/domicilio.jpg'
  },
  {
    titulo: 'Dispositivo Form',
    descripcion: 'Alta para el formato "Dispositivo", recuerda verificar antes de un subbmit',
    link:'dispositivo',
    imagen: 'assets/dispo_energ.jpg'
  },
  {
    titulo: 'Planta Form',
    descripcion: 'Alta para el formato "Planta", recuerda verificar antes de un subbmit',
    link:'planta',
    imagen: 'assets/planta.jpg'
  },
  {
    titulo: 'Viven',
    descripcion: 'Alta para el formato "Viven", recuerda verificar antes de un subbmit',
    link:'Viven',
    imagen: 'assets/viven.jpeg'
  },
  {
    titulo: 'Alimenta',
    descripcion: 'Alta para el formato "Alimenta", recuerda verificar antes de un subbmit',
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
