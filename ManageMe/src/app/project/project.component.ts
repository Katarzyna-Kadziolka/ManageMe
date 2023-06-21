import { FeaturesService } from './../../services/features-service';
import { ProjectsService } from './../../services/projects-service';
import { ProjectDetails } from './../../models/project-details';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectsService]
})
export class ProjectComponent implements OnInit, OnDestroy {
  projectDetails: ProjectDetails = {
    id: '',
    name: '',
    description: '',
    features: []
  }

  private projectsSubscription: Subscription | undefined;

  constructor(private readonly route: ActivatedRoute, private projectsService: ProjectsService, private featureService: FeaturesService) {}

  ngOnInit(): void {
    let projectId = "";
    let project = {
      id: '',
      name: '',
      description: '',
    }
    this.route.params.subscribe(data => {
      projectId =  data['id']
      this.projectsService.GetProject(projectId).subscribe(
        p => project = p
      )
    })
    
    this.projectDetails.id = project.id;
    this.projectDetails.name = project.name;
    this.projectDetails.description = project.description;
    this.projectsSubscription = this.featureService.featuresObservable.pipe(
          map(ff => ff.filter(f => f.projectId === projectId))
      ).subscribe(
        updatedList => {
          console.log("🚀 ~ file: project.component.ts:51 ~ ProjectComponent ~ ngOnInit ~ updatedList:", updatedList)
          this.projectDetails.features = updatedList;
        }
      );
    // this.projectsSubscription = this.featureService.GetFeaturesForProject(projectId).subscribe(
    //   updatedList => {
    //     console.log("🚀 ~ file: project.component.ts:51 ~ ProjectComponent ~ ngOnInit ~ updatedList:", updatedList)
    //     this.projectDetails.features = updatedList;
    //   }
    // )

  }

  ngOnDestroy(): void {
    if (this.projectsSubscription) {
      this.projectsSubscription.unsubscribe();
    }
  }

}
