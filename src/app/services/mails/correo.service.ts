import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorreoService {
  private apiUrl = 'http://enviocorreo-production.up.railway.app:3005'; // URL DEL SERVIDOR BACKEND

  constructor(private http: HttpClient) {}

  enviarCorreo(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enviar-correo/divisiones-empresariales`, datos);
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
}
