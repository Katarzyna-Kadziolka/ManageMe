import { UsersService } from './../../services/users-service';
import { FeatureTask } from './../../models/feature-task';
import { Component, Input } from '@angular/core';
import { Permishion } from 'src/models/permishion';
import { Priority } from 'src/models/priority';
import { Status } from 'src/models/status';
import { User } from 'src/models/user';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input () task: FeatureTask = {
    name: "",
    description: "",
    priority: Priority.Must,
    featureId: "",
    expectedExecutionTime: new Date(),
    status: Status.Todo,
    addDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    userId: ""
  }

  constructor(private usersService: UsersService) {}

  priorityChanged(event: Priority) {
    this.task.priority = event;
  }

  statusChanged(event: Status) {
    this.task.status = event;
  }

  user : User = {
    id: "",
    lastName: "",
    name: "",
    login: "",
    password: "",
    permishion: Permishion.Developer
  }

  addDate = "";
  startDate = "";
  endDate = "";


  ngOnInit(): void {
    this.user = this.usersService.GetUserById(this.task.userId);
  }

  toDate(time: Date) : string {
    return `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
  }
}
