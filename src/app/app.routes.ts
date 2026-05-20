
import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ProjectsComponent } from '../pages/projects/projects.component';






export const routes: Routes = [

  {path:'' , redirectTo:'home' , pathMatch:"full"},
  {path:'home', component:HomeComponent , title:'home'},
  {path:'about' , component:AboutComponent , title:'about'},
  {path:'skills' , component:SkillsComponent , title:'skills'},
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {path:'contact' , component:ContactComponent , title:'contact'},
  



];
