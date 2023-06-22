import { Feature } from './../../models/feature';
import { FeatureFormComponent } from './../feature-form/feature-form.component'
import { FeaturesService } from './../../services/features-service';
import { ProjectsService } from './../../services/projects-service';
import { ProjectDetails } from './../../models/project-details';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectDetails: ProjectDetails = {
    id: '',
    name: '',
    description: '',
    features: []
  }

  constructor(private readonly route: ActivatedRoute, private projectsService: ProjectsService, private featureService: FeaturesService,) {}

  ngOnInit(): void {
    let projectId = "";
    this.route.params.subscribe(data => {
      projectId =  data['id']
      this.projectsService.GetProjectDetails(projectId).subscribe(
        p => this.projectDetails = p
      )
    })
  }

  @ViewChild('featureFormContainer', {read: ViewContainerRef}) featureFormContainer!: ViewContainerRef;

  createFeatureForm() {
    const featureForm = this.featureFormContainer.createComponent(FeatureFormComponent);
    const subscription = featureForm.instance.onSaved.subscribe(() => {
      featureForm.destroy();
      subscription.unsubscribe();
    })
  }

  onEditfeature(feature: Feature) {
    this.featureService.DeleteFeature(feature.id);
    const featureForm = this.featureFormContainer.createComponent(FeatureFormComponent);
    featureForm.setInput('feature', feature);
    const subscription = featureForm.instance.onSaved.subscribe(() => {
      featureForm.destroy();
      subscription.unsubscribe();
    })
  }

}
