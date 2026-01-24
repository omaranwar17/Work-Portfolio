import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showDialog = false;

openCV():void{
    window.open('assets/omarAlkerm-cv.pdf', '_blank');
    this.showDialog = false;
}
}
