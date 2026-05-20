import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly linkedinUrl = 'http://www.linkedin.com/in/omar-anwar-561167326';
  readonly email = 'omaranw13@gmail.com';

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  successMessage = '';
  errorMessage = '';
  submitted = false;

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  get controls() {
    return this.form.controls;
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.successMessage = '';
      this.errorMessage = this.translate.instant('contact.errorMessage');
      return;
    }

    this.successMessage = this.translate.instant('contact.successMessage');
    this.errorMessage = '';
    this.form.reset();
    this.submitted = false;
  }

  openLinkedIn(): void {
    window.open(this.linkedinUrl, '_blank');
  }

  openGmail(): void {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`;
    window.open(gmailUrl, '_blank');
  }
}
