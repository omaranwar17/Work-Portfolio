import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  icon: string;
  key: string;
}

const dev = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

// أيقونة نصية بسيطة كـ SVG (data URI) للتقنيات اللي ملهاش أيقونة رسمية
const badge = (text: string, color: string) => {
  const fontSize = text.length > 3 ? 20 : 26;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="12" fill="${color}"/>` +
    `<text x="32" y="32" text-anchor="middle" dominant-baseline="central" ` +
    `font-family="Arial, sans-serif" font-weight="700" font-size="${fontSize}" fill="#fff">${text}</text>` +
    `</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills: Skill[] = [
    // Backend
    { icon: dev('dotnetcore'), key: 'dotnet' },
    { icon: dev('csharp'), key: 'csharp' },
    { icon: dev('microsoftsqlserver'), key: 'sqlserver' },
    { icon: dev('azuredevops'), key: 'azureDevops' },
    { icon: badge('OOP', '#512BD4'), key: 'oop' },
    { icon: badge('EFC', '#6D4AFF'), key: 'efc' },
    { icon: badge('LINQ', '#3B82F6'), key: 'linq' },
    { icon: badge('MVC', '#0EA5E9'), key: 'mvc' },

    // Frontend
    { icon: dev('angular'), key: 'angular' },
    { icon: dev('react'), key: 'react' },
    { icon: dev('typescript'), key: 'typescript' },
    { icon: dev('javascript'), key: 'javascript' },
    { icon: dev('html5'), key: 'html' },
    { icon: dev('css3'), key: 'css' },
    { icon: dev('tailwindcss'), key: 'tailwind' },
    { icon: dev('bootstrap', 'plain'), key: 'bootstrap' },
    { icon: dev('sass'), key: 'sass' },
    { icon: 'https://mui.com/static/logo.png', key: 'mui' },

    // Tools
    { icon: dev('git'), key: 'git' },
    { icon: dev('github'), key: 'github' },
    { icon: dev('figma'), key: 'figma' },
    { icon: dev('postman'), key: 'postman' }
  ];
}