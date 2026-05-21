import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects = [
  {
    titleKey: 'projects.items.gameReviews.title',
    descriptionKey: 'projects.items.gameReviews.description',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    technologies: ['angular', 'tailwind_css', 'typescript', 'api'],
    github: 'https://github.com/omaranwar17/Games',
    demo: 'https://games-iota-azure.vercel.app/',
  },

  {
    titleKey: 'projects.items.freshCart.title',
    descriptionKey: 'projects.items.freshCart.description',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop',
    technologies: ['angular', 'tailwind_css', 'rxjs', 'rest_api'],
    github: 'https://github.com/omaranwar17/Angular-E-Commerce',
    demo: 'https://angular-e-commerce-self.vercel.app/home',
  },
  {
  titleKey: 'projects.items.weatherApp.title',
  descriptionKey: 'projects.items.weatherApp.description',
  image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1200&auto=format&fit=crop',
  technologies: ['angular', 'tailwind_css', 'typescript', 'weather_api'],
  github: 'https://github.com/YOUR_USERNAME/weather-app',
  demo: 'https://weather-app-chi-lac-90.vercel.app/',
},

  {
    titleKey: 'projects.items.taskManager.title',
    descriptionKey: 'projects.items.taskManager.description',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    technologies: ['nextjs', 'react', 'tailwind_css'],
    github: 'https://github.com/omaranwar17/Do-List',
    demo: 'https://project-next13-car-h3cl.vercel.app/',
  },

  {
    titleKey: 'projects.items.appStore.title',
    descriptionKey: 'projects.items.appStore.description',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop',
    technologies: ['angular', 'bootstrap', 'typescript'],
    github: 'https://github.com/',
    demo: 'https://ahmed-mohamed-26.github.io/Store/#/Home',
  },
];

  trackByTitle(_index: number, project: { titleKey: string }) {
    return project.titleKey;
  }
}
