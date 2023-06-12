import { Router } from '@angular/router';
import { Project } from './../../models/project';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input () project: Project = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private readonly router: Router) {}

  protected onProjectCardClick() {
    this.router.navigate([`/project/${this.project.id}`])
  }
}
