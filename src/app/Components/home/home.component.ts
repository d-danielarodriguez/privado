import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// interface
// const

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {

    // info = INFORMACION;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    navegar(link: string){
      const liga = '/' + link;
      this.router.navigate([liga]);
    }

  }