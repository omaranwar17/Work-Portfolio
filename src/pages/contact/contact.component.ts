import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   linkedinUrl = 'http://www.linkedin.com/in/omar-anwar-561167326';

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }

  
  openGmail() {
  const email = 'omaranw13@gmail.com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(gmailUrl, '_blank');
}

}
