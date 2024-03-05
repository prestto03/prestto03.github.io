import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class CorreoService {
  private apiUrl = 'https://enviocorreo-production.up.railway.app'; // URL DEL SERVIDOR BACKEND

  // private apiUrl = 'http://localhost:3005';

  constructor(private http: HttpClient) {}

  enviarCorreo(correoEndpoint: string, datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/${correoEndpoint}`, datos);
  }

  enviarCorreoAtCliente(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/at-cliente`, datos);
  }

  enviarCorreoAtProveedor(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/at-proveedor`, datos);
  }

  enviarCorreoResponsabilidadSocial(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/responsabilidad-social`, datos);
  }

  enviarCorreoTrabajaConNosotros(datos: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/trabaja-nosotros`, datos);
  }

  enviarCorreoSuscriptores(email: string): Observable<any> {
    const datos = { email: email };
    return this.http.post(`${this.apiUrl}/api/suscriptores`, datos);
  }
}
