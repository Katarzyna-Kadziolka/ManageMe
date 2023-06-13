import { BorderColor } from './../../models/border-color';
import { Priority } from 'src/models/priority';
import { FeatureTask } from './../../models/feature-task';
import { Component, Input } from '@angular/core';
import { Status } from 'src/models/status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input () task: FeatureTask = {
    name: "",
    addDate: new Date(),
    description: "",
    endDate: new Date(),
    expectedExecutionTime: new Date(),
    featureId: "",
    priority: Priority.Must,
    startDate: new Date(),
    status: Status.Todo,
    userId: ""
  }

  borderColor = BorderColor.Grey;
}
