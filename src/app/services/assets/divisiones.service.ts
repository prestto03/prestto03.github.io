import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionesService {
  private divisionSeleccionada: string = '';

  constructor() {}

  obtenerDivisionSeleccionada(): string {
    return this.divisionSeleccionada;
  }

  establecerDivisionSeleccionada(id: string): void {
    this.divisionSeleccionada = id;
  }
}
