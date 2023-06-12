import { Priority } from 'src/models/priority';
import { Feature } from './../../models/feature';
import { Component, Input } from '@angular/core';
import { Status } from 'src/models/status';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  @Input () feature: Feature = {
    id:"",
    name: "",
    description: "",
    owner: "",
    priority: Priority.Must,
    projectId: "",
    status: Status.Todo,
    tasks: []
  }
}
