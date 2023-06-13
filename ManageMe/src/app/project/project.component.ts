import { ProjectsService } from './../../services/projects-service';
import { ProjectDetails } from './../../models/project-details';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectsService]
})
export class ProjectComponent {
  project: ProjectDetails = {
    id: '',
    name: '',
    description: '',
    features: []
  }

  constructor(private readonly route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit(): void {
    let projectId = "";
    this.route.params.subscribe(data => {
      projectId =  data['id']
      this.project = this.projectsService.GetProjectDetails(projectId);
    })
    
  }

}
