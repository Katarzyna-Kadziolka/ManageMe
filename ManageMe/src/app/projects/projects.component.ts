import { Project } from './../../models/project';
import { Component } from '@angular/core';
import { ProjectsService } from './../../services/projects-service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent {

  projects: Array<Project> = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
