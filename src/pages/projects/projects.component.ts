import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects = [
{
title: 'Game Reviews Platform',
description:
'Modern gaming discovery platform with responsive UI, game categories, reviews, dark mode, and smooth user experience built with modern frontend technologies.',
image:
'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'API'],
github: 'https://github.com/omaranwar17/Games',
demo: 'https://games-iota-azure.vercel.app/',
},

{
title: 'FreshCart E-Commerce',
description:
'Full modern ecommerce web application with authentication, products, cart system, dark mode, responsive design, and smooth shopping experience.',
image:
'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop',
technologies: ['Angular', 'Tailwind CSS', 'RxJS', 'REST API'],
github: 'https://github.com/omaranwar17/Angular-E-Commerce',
demo: 'https://angular-e-commerce-self.vercel.app/home',
},

{
title: 'Task Management App',
description:
'Clean and responsive productivity application for managing daily tasks with modern UI, optimized workflow, and smooth interactions.',
image:
'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
technologies: ['Next.js', 'React', 'Tailwind CSS'],
github: 'https://github.com/omaranwar17/Do-List',
demo: 'https://project-next13-car-h3cl.vercel.app/',
},

{
title: 'App Store Platform',
description:
'Modern digital app store interface with responsive layout, product browsing, categories, and elegant user experience design.',
image:
'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop',
technologies: ['Angular', 'Bootstrap', 'TypeScript'],
github: 'https://github.com/',
demo: 'https://ahmed-mohamed-26.github.io/Store/#/Home',
},
];


}
