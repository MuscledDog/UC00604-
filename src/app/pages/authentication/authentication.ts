import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css',
})
export class Authentication {



  protected signinForms!: UntypedFormGroup;

  constructor (private fb: UntypedFormBuilder) {
    this.signinForms = this.fb.nonNullable.group({
      email: ['',[Validators.required, Validators.email]], /** serve para validar o @ */
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
     });
  }

onSubmit() {
  this.signinForms.get('email')?.getError('required');
  console.log("Controls", this.signinForms.controls['email'].value);

   console.log("Meu forms", this.signinForms.value);
}


 }
