import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private slideSeleccionadoSubject = new Subject<number>();

  slideSeleccionado$ = this.slideSeleccionadoSubject.asObservable();

  constructor() { }

  seleccionarSlide(slideIndex: number): void {
    this.slideSeleccionadoSubject.next(slideIndex);
  }
}
