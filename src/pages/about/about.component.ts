import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showDialog = false;

  openCV(): void {
    window.open('assets/Omar-AnwarCvpdf', '_blank');
    this.showDialog = false;
  }
}
