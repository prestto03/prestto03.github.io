import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from '../../services/mails/correo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})

export class ContactoComponent {
  formularioSeleccionado: string = '1';
  formData1: FormGroup;
  formData2: FormGroup;
  formData3: FormGroup;

  constructor(private fb: FormBuilder, private correoService: CorreoService) {
    this.formData1 = this.fb.group({
      nombre: ['', Validators.required],
      tema: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.formData2 = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.formData3 = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  seleccionarFormulario(formulario: string): void {
    this.formularioSeleccionado = formulario;
  }

  onSubmitForm1() {
    if (this.formData1.valid) {
      this.correoService.enviarCorreoAtCliente(this.formData1.value).subscribe(
        // (resp) => {
        //   console.log('Mensaje enviado correctamente', resp);
        // },
        // (error) => {
        //   console.error('Error al enviar el mensaje', error);
        // }
      );
      this.showSuccessAlert();
    }
  }

  onSubmitForm2() {
    if (this.formData2.valid) {
      this.correoService.enviarCorreoAtProveedor(this.formData2.value).subscribe(
          // (resp) => {
          //   console.log('Mensaje enviado correctamente', resp);
          // },
          // (error) => {
          //   console.error('Error al enviar el mensaje', error);
          // }
        );
      this.showSuccessAlert();
    }
  }

  onSubmitForm3() {
    if (this.formData3.valid) {
      this.correoService.enviarCorreoResponsabilidadSocial(this.formData3.value).subscribe(
          // (resp) => {
          //   console.log('Mensaje enviado correctamente', resp);
          // },
          // (error) => {
          //   console.error('Error al enviar el mensaje', error);
          // }
        );
      this.showSuccessAlert();
    }
  }

  private showSuccessAlert() {
    Swal.fire({
      title: 'Correo Enviado',
      text: '¡Gracias por ponerte en contacto con nosotros! 🌟 Nos comunicaremos contigo a la brevedad posible. 👋',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      // Limpia los campos del formulario
      if(this.formularioSeleccionado === '1') {
        this.formData1.reset();
      } else if(this.formularioSeleccionado === '2') {
        this.formData2.reset();
      } else if(this.formularioSeleccionado === '3') {
        this.formData3.reset();
      }
    });
  }
}
