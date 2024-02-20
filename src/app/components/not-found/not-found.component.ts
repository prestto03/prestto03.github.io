import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  counter: number = 10;
  interval: any; // Variable para almacenar el intervalo

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.counter--;
      if(this.counter === 0) {
        clearInterval(interval);
        this.goBack();
      }
    }, 1000); //Actualiza el contador cada segundo
  }


  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    // Detener el intervalo cuando el componente se destruye
    clearInterval(this.interval);
  }
}
