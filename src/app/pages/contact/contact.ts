import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
private fb = inject(FormBuilder);

contactForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  message: ['', [Validators.required, Validators.minLength(10)]]
});
submitted = false;
successMessage = false;

get f(){
  return this.contactForm.controls;
}

onSubmit(): void {
  this.submitted = true;

  if (this.contactForm.invalid){
    return;
  }

  console.log('Form Submission:', this.contactForm.value);

  this.successMessage = true;
  this.contactForm.reset();
  this.submitted = false;

  setTimeout(() =>{
    this.successMessage = false;
  }, 4000);
}
}
