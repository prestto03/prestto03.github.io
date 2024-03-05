import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/animation/carousel.service';
import  { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  slideSeleccionado = 0;

  constructor(private carruselService: CarouselService) { }

  ngOnInit(): void {
    this.carruselService.slideSeleccionado$.subscribe((slideIndex: number) => {
      this.slideSeleccionado = slideIndex;
    });
  }
}
