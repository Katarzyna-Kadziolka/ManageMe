import { Project } from './../../models/project';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {
      name: "Pomodoro App",
      description: "Time and task management application."
    },
    {
      name: "Athena",
      description: "Home library management application."
    },
    {
      name: "Urania",
      description: "Calculator of wire parameters to simplify choosing the right material for chainmaille jewelry."
    }
  ]
}
