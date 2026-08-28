import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  showDialog = false;
  displayedYears = 0;


  ngOnInit(): void {
  this.animateYears();
}

animateYears(): void {
  const target = 2;
  const duration = 1000; 
  const stepTime = duration / target;

  const interval = setInterval(() => {
    this.displayedYears++;

    if (this.displayedYears >= target) {
      clearInterval(interval);
    }
  }, stepTime);
}


  openCV(): void {
    window.open('assets/Omar_Anwar_cv.pdf', '_blank');
    this.showDialog = false;
  }
}
