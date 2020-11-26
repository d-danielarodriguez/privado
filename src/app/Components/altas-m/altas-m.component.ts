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
<<<<<<< HEAD
    link:'recibo',
=======
    link: '',
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
    imagen: 'assets/recibo.jpg'
  },
  {
    titulo: 'Persona Form',
<<<<<<< HEAD
    descripcion: 'persona',
    link:'persona',
=======
    descripcion: '',
    link: 'persona',
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
    imagen: 'assets/person.jpg'
  },
  {
    titulo: 'Colonia Form',
    descripcion: '',
<<<<<<< HEAD
    link:'colonia',
=======
    link: '',
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
    imagen: 'assets/colo.jpg'
  },
  {
    titulo: 'Domicilio Form',
    descripcion: '',
<<<<<<< HEAD
    link:'domicilio',
=======
    link: '',
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
    imagen: 'assets/domicilio.jpg'
  },
  {
    titulo: 'Dispositivo Form',
    descripcion: '',
<<<<<<< HEAD
    link:'dispositivo',
    imagen: 'assets/dispo_energ.jpg'
  },
  {
    titulo: 'Planta Form',
    descripcion: '',
    link:'planta',
    imagen: 'assets/planta.jpg'
=======
    link: '',
    imagen: 'assets/dispo_energ.jpg'
  },
  {
    titulo: 'Relacion Viven',
    descripcion: 'Crea las relaciones entre personas y domicilio donde viven',
    link: 'Viven',
    imagen: 'assets/foco.png'
  },
  {
    titulo: 'Relacion Alimenta',
    descripcion: 'Crea las relaciones entre plantas de energia y las colonias que aliementa',
    link: 'Alimenta',
    imagen: 'assets/foco.png'
>>>>>>> 6fecdde20a88731f5df90d8b7410c0280c27c195
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
