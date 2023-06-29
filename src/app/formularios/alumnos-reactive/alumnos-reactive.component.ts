import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos-reactive',
  templateUrl: './alumnos-reactive.component.html',
  styleUrls: ['./alumnos-reactive.component.css']
})
export class AlumnosReactiveComponent {
  alumnoForm!: FormGroup

  constructor(private readonly fb: FormBuilder) { this.alumnoForm = this.initForm() }

  onSubmit(): void {
    console.log('Form ->', this.alumnoForm.value)
  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(5)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      calif: ['', [Validators.required]]
    })
  }

}


