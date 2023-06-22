import { FeatureTasksService } from './../../services/feature-tasks-service';
import { User } from './../../models/user';
import { UsersService } from './../../services/users-service';
import { BorderColor } from './../../models/border-color';
import { Priority } from 'src/models/priority';
import { FeatureTask } from './../../models/feature-task';
import { Component, Input } from '@angular/core';
import { Status } from 'src/models/status';
import { Permishion } from 'src/models/permishion';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [UsersService]
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

  constructor(private usersService: UsersService, private featureTasksService: FeatureTasksService) {}

  borderColor = BorderColor.Grey;
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

  onDelete() {
    this.featureTasksService.DeleteTask(this.task.name);
  }

}
