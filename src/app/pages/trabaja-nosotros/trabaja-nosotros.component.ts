import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from './../../services/mails/correo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabaja-nosotros',
  templateUrl: './trabaja-nosotros.component.html',
  styleUrls: ['./trabaja-nosotros.component.css']
})


export class TrabajaNosotrosComponent {
  selectedFileName: string = '';
  trabajoForm: FormGroup;
  divisionSeleccionada: string | null = null;

  private fileTmp:any;

  constructor(private fb: FormBuilder, private correoService: CorreoService) {
    this.trabajoForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      ciudad: ['', Validators.required],
      divisionSeleccionada: ['default', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comentario: ['', Validators.required],
      cv: [null, Validators.required],
    });
  }

  updateFileName(event: any): void {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    } else {
      this.selectedFileName = '';
    }
    // console.log(this.selectedFileName);
  }

  getData($event: any): void {
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
    // console.log(file)
  }

  onSubmit() {
    if (this.trabajoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.trabajoForm.value.nombre);
      formData.append('telefono', this.trabajoForm.value.telefono);
      formData.append('ciudad', this.trabajoForm.value.ciudad);
      formData.append('divisionSeleccionada', this.trabajoForm.value.divisionSeleccionada);
      formData.append('email', this.trabajoForm.value.email);
      formData.append('comentario', this.trabajoForm.value.comentario);
      formData.append('cv', this.fileTmp.fileRaw, this.fileTmp.fileName);

      this.correoService.enviarCorreoTrabajaConNosotros(formData).subscribe(
        // (resp) => {
        //   console.log('Formulario válido. Enviar datos:', resp);
        // },
        // (error) => {
        //   console.error('Formulario inválido:', error);
        // }
      );
      this.showSuccessAlert();
    }
  }

  seleccionarColor(event: Event): void {
    const division = (event.target as HTMLSelectElement).value;
    this.divisionSeleccionada = division === 'default' ? null : this.divisionColor(division || '');
  }

  divisionColor(division: string): string {
    switch (division) {
      case 'Control de Plagas':
        return '#71af32';
      case 'Limpieza':
        return '#542f88';
      case 'Jardinería':
        return '#ef7912';
      case 'Desinfección':
        return '#2791cc';
      default:
        return '#a7a7a7';
    }
  }

  private showSuccessAlert() {
    Swal.fire({
      title: 'Datos ingresados con Éxito',
      text: 'Hemos recibido tu perfil y te contactaremos pronto para una entrevista.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      this.trabajoForm.reset();
    });
  }
}
