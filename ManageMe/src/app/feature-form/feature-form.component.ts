import { FeaturesService } from './../../services/features-service';
import { Feature } from './../../models/feature';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Priority } from 'src/models/priority';
import { Status } from 'src/models/status';
import { FeatureForm } from './feature-form';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.scss'],
  providers: [FeaturesService]
})
export class FeatureFormComponent implements OnInit {
  @Input () feature: Feature = {
    id: "",
    name: "",
    owner: "",
    description: "",
    priority: Priority.Must,
    status: Status.Todo,
    projectId: "",
    tasks: []
  }

  changedFeature!: FormGroup<FeatureForm>

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute, private readonly featureService: FeaturesService) {}

  ngOnInit(): void {
      this.changedFeature = this.fb.group({
        name: this.fb.nonNullable.control(this.feature.name),
        owner: this.fb.nonNullable.control(this.feature.owner),
        description: this.fb.nonNullable.control(this.feature.description),
      })
  }

  onSave() {
    const feature : Feature = {
      id: this.feature.id,
      name: this.changedFeature.controls.name.value,
      owner: this.changedFeature.controls.owner.value,
      description: this.changedFeature.controls.description.value,
      projectId: this.getProjectId(),
      tasks: this.feature.tasks,
      priority: this.feature.priority,
      status: this.feature.status
    }
    console.log("🚀 ~ file: feature-form.component.ts:51 ~ FeatureFormComponent ~ onSave ~ feature:", feature)

    this.featureService.AddOrUpdateFeature(feature);
  }

  getProjectId() {
    let projectId = "";
    this.route.params.subscribe(data => {
      projectId =  data['id']
    })
    return projectId;
  }

  priorityChanged(event: Priority) {
    this.feature.priority = event;
  }

  statusChanged(event: Status) {
    this.feature.status = event;
  }

}
