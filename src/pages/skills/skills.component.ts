import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', altKey: 'skills.items.html.alt', labelKey: 'skills.items.html.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', altKey: 'skills.items.css.alt', labelKey: 'skills.items.css.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', altKey: 'skills.items.javascript.alt', labelKey: 'skills.items.javascript.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', altKey: 'skills.items.bootstrap.alt', labelKey: 'skills.items.bootstrap.label' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', altKey: 'skills.items.tailwind.alt', labelKey: 'skills.items.tailwind.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', altKey: 'skills.items.jquery.alt', labelKey: 'skills.items.jquery.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', altKey: 'skills.items.angular.alt', labelKey: 'skills.items.angular.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', altKey: 'skills.items.typescript.alt', labelKey: 'skills.items.typescript.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', altKey: 'skills.items.sass.alt', labelKey: 'skills.items.sass.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', altKey: 'skills.items.figma.alt', labelKey: 'skills.items.figma.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', altKey: 'skills.items.git.alt', labelKey: 'skills.items.git.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', altKey: 'skills.items.github.alt', labelKey: 'skills.items.github.label' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', altKey: 'skills.items.react.alt', labelKey: 'skills.items.react.label' },
    { icon: 'https://mui.com/static/logo.png', altKey: 'skills.items.mui.alt', labelKey: 'skills.items.mui.label' },
    { icon: 'https://angular.io/assets/images/logos/angular/angular.svg', altKey: 'skills.items.angularMaterial.alt', labelKey: 'skills.items.angularMaterial.label' },
    {
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  altKey: 'skills.java.alt',
  labelKey: 'Java'
}
  ];
}
