import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import * as AOS from 'aos';
import { CarouselService } from 'src/app/services/animation/carousel.service';
import { DivisionesService } from 'src/app/services/assets/divisiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})

export class InicioComponent implements OnInit  {
  divisionImage: string = '';

  getState(outlet: RouterOutlet): string {
    return outlet.activatedRouteData['animation'];
  }

  verMas: boolean = false;

  constructor(private divisionesService: DivisionesService, private carruselService: CarouselService) {}

  activarSlide(slideIndex: number): void {
    this.carruselService.seleccionarSlide(slideIndex);
  }


  seleccionarDivision(id:string):void {
    this.divisionesService.establecerDivisionSeleccionada(id);
  }

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', () => AOS.refresh());
    this.divisionImage = 'assets/img/default-image.jpg';
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
