import { Component, Input, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CorreoService } from 'src/app/services/mails/correo.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent {
  @Input() imagenContacto = 'assets/img/website/contacto-plagas.jpg';
  @Input() botonColor: string | undefined;
  @Input() divisionEmpresarial: string = '';

  // Maneja cambios en el tamaño de la ventana para actualizar mostrarImagen
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mostrarImagen = window.innerWidth >= 992; // Cambia 992 según tus necesidades
  }

  mostrarImagen = true;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: CorreoService) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, this.phoneValidator(), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
      divisionEmpresarial: [this.divisionEmpresarial]
    });

    // Oculta la imagen en el breackpoint sm
    this.mostrarImagen = window.innerWidth >= 576;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let correoEndpoint = '';
      let templatePath = '';

      // Determina el endpoint de correo según la división empresarial
      switch (this.divisionEmpresarial) {
        case 'plagas':
          correoEndpoint = 'plagas';
          templatePath = 'correo-plagas.ejs'; // Nombre del archivo de plantilla para plagas
          break;
        case 'limpieza':
          correoEndpoint = 'limpieza';
          templatePath = 'correo-limpieza.ejs'; // Nombre del archivo de plantilla para limpieza
          break;
        case 'jardineria':
          correoEndpoint = 'jardineria';
          templatePath = 'correo-jardineria.ejs'; // Nombre del archivo de plantilla para limpieza
          break;
        case 'desinfeccion':
          correoEndpoint = 'desinfeccion';
          templatePath = 'correo-desinfeccion.ejs'; // Nombre del archivo de plantilla para limpieza
          break;
        // Agrega casos para otras divisiones empresariales si es necesario
        default:
          // console.log('División empresarial no válida');
          return;
      }

      // Ahora pasamos la división empresarial y el nombre del archivo de plantilla
      this.httpService.enviarCorreo(correoEndpoint, { ...this.contactForm.value, divisionEmpresarial: this.divisionEmpresarial, templatePath })
        .subscribe(
          (resp) => {
            // console.log('Correo Enviado con Éxito:', resp);
            this.showSuccessAlert();
          },
          (error) => {
            // console.error('Error al Enviar el correo:', error);
          }
        );
    }
  }

  //Alert de confirmación del formulario.
  private showSuccessAlert() {
    Swal.fire({
      title: 'Correo Enviado',
      text: '¡Gracias por ponerte en contacto con nosotros! 🌟 Nos comunicaremos contigo a la brevedad posible. 👋',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      // Limpia los datos del formulario
      this.contactForm.reset();
    })
  }

  phoneValidator() {
    return (control: { value: any }) => {
      const phoneNumber = control.value;
      const regex = /^[0-9]*$/; // Esto permite solo números enteros

      if (phoneNumber && !regex.test(phoneNumber)) {
        return { phone: true }; // Devuelve un objeto con el nombre de la validación personalizada
      }

      if (phoneNumber && phoneNumber.length > 10) {
        return { maxLength: true }; // Devuelve un objeto con el nombre de la validación personalizada
      }

      return null;
    };
  }
}
