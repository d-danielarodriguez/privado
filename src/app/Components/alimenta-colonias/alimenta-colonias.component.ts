import { Router } from '@angular/router';
import { ConexionBdService } from './../../Services/conexion-bd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimenta-colonias',
  templateUrl: './alimenta-colonias.component.html',
  styleUrls: ['./alimenta-colonias.component.css']
})
export class AlimentaColoniasComponent implements OnInit {
  info = [];

  constructor(private bdService: ConexionBdService, private router: Router) {
    this.bdService.getNumeroAlimenta().subscribe((data: any) => {
      this.info = data;
      this.info.forEach(i => {
        if (i.Renovable === 'n'){
          i.Renovable = 'No renovable';
        } else {
          i.Renovable = 'Renovable';
        }
      });
      console.log(this.info);
    });
  }

  ngOnInit(): void {}

  regresar(){
    this.router.navigate(['/Home']);
  }

}
