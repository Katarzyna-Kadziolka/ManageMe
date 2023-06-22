import { FeatureTasksService } from './../../services/feature-tasks-service';
import { User } from './../../models/user';
import { UsersService } from './../../services/users-service';
import { BorderColor } from './../../models/border-color';
import { Priority } from 'src/models/priority';
import { FeatureTask } from './../../models/feature-task';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from 'src/models/status';
import { Permishion } from 'src/models/permishion';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input () task: FeatureTask = {
    name: "",
    addDate: "",
    description: "",
    endDate: "",
    expectedExecutionTime: "",
    featureId: "",
    priority: Priority.Must,
    startDate: "",
    status: Status.Todo,
    userName: ""
  }

  constructor(private usersService: UsersService, private featureTasksService: FeatureTasksService) {}

  borderColor = BorderColor.Grey;
  user : User = {
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
    this.user = this.usersService.GetUserByName(this.task.userName);
  }

  onDelete() {
    this.featureTasksService.DeleteTask(this.task.name);
  }

  @Output () onEditTask = new EventEmitter();
  onEdit() {
    this.onEditTask.emit(this.task);
  }

}
