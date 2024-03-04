import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CorreoService } from 'src/app/services/mails/correo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  correoElectronico: string = '';

  constructor(private correoService: CorreoService) {}

  suscribirse() {
    if (!this.validarCorreoElectronico(this.correoElectronico)) {
      Swal.fire({
        icon: 'error',
        title: 'Correo electrónico inválido',
        text: 'Por favor ingresa un correo electrónico válido.'
      });
      return;
    }

    this.correoService.enviarCorreoSuscriptores(this.correoElectronico).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: '¡Suscripción exitosa!',
          text: 'Gracias por suscribirte.'
        });
        // Limpia el input luego de enviar el correo
        this.correoElectronico = '';
      },
      error => {
        console.error('Error al suscribirse:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al procesar tu solicitud. Por favor inténtalo de nuevo más tarde.'
        });
      }
    );
  }

  validarCorreoElectronico(correoElectronico: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico);
  }
}
