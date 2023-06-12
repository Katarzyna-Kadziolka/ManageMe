import { ActivatedRoute } from '@angular/router';
import { Project } from './../../models/project';
import { Component } from '@angular/core';
import { ProjectsService } from 'src/services/projects-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectsService]
})
export class ProjectComponent {
  project: Project = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private readonly route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit(): void {
    let projectId = "";
    this.route.params.subscribe(data => {
      projectId =  data['id']
    })
    this.project = this.projectsService.GetProject(projectId);
  }

}
