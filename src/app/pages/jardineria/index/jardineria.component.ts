import { Component, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import Swal from 'sweetalert2';
import { CorreoService } from 'src/app/services/mails/correo.service';
import * as AOS from 'aos';
declare const bootstrap: any;

@Component({
  selector: 'app-jardineria',
  templateUrl: './jardineria.component.html',
  styleUrls: ['./jardineria.component.css']
})
export class JardineriaComponent implements AfterViewInit {
  correoElectronico: string = '';

  private currentPopover: any; // Variable para almacenar la instancia del popover actual

  constructor(private el: ElementRef, private renderer: Renderer2, private correoService: CorreoService) {}

  ngAfterViewInit(): void {
    // Obtén todos los elementos que tienen el atributo data-bs-toggle="popover"
    const popoverTriggers = this.el.nativeElement.querySelectorAll('[data-bs-toggle="popover"]');

    // Itera sobre cada elemento y añade un event listener para el evento 'shown.bs.popover'
    popoverTriggers.forEach((popoverTrigger: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
      const popover = new bootstrap.Popover(popoverTrigger, {
        placement: 'bottom', // Puedes ajustar esto según tus necesidades
      });

      popoverTrigger.addEventListener('shown.bs.popover', () => {
        // Cierra el popover actualmente abierto antes de abrir uno nuevo
        if (this.currentPopover && this.currentPopover !== popover) {
          this.currentPopover.hide();
        }

        // Actualiza la referencia al popover actual
        this.currentPopover = popover;
      });
    });
  }

  // Método para manejar clics dentro del componente
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    // Cierra el popover actual si está abierto y el clic no ocurrió en un elemento que lo activa
    if (this.currentPopover && !clickedElement.closest('[data-bs-toggle="popover"]')) {
      this.currentPopover.hide();
      this.currentPopover = null; // Actualiza la referencia al popover actual
    }
  }

  // Método para inicializar los tooltips y popovers
  openPopover(popoverIndex: number): void {
    // Obtén todos los elementos que tienen el atributo data-bs-toggle="popover"
    const popoverTriggers = this.el.nativeElement.querySelectorAll('[data-bs-toggle="popover"]');

    // Abre el popover específico
    if (popoverTriggers.length > popoverIndex) {
      const specificPopoverTrigger = popoverTriggers[popoverIndex];
      const specificPopover = new bootstrap.Popover(specificPopoverTrigger, {
        placement: 'bottom', // Puedes ajustar esto según tus necesidades
      });
      specificPopover.show();
    }
  }

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', () => AOS.refresh());
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

    // Método para guardar el correo de los suscriptores
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
