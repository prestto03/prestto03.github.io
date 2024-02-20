import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { DivisionesService } from 'src/app/services/assets/divisiones.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {
  counter: number = 10;
  divisionImage: string = '';
  interval: any; // Variable para almacenar el intervalo

  constructor(private location: Location, private divisionesService: DivisionesService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter--;
      if(this.counter === 0) {
        clearInterval(this.interval);
        this.goBack();
      }
    }, 1000); //Actualiza el contador cada segundo

    this.divisionImage = this.obtenerImagen();
  }

  ngOnDestroy(): void {
    // Detener el intervalo cuando el componente se destruye
    clearInterval(this.interval);
  }

  obtenerImagen(): string {
    const divisionSeleccionada = this.divisionesService.obtenerDivisionSeleccionada();
    return `assets/img/website/${divisionSeleccionada}.webp`;
  }

  goBack(): void {
    // Detener el intervalo cuando se hace clic en el botón "Volver"
    clearInterval(this.interval);
    this.location.back();
  }
}
