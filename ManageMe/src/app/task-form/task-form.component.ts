import { FeatureTask } from './../../models/feature-task';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeatureTasksService } from './../../services/feature-tasks-service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority } from 'src/models/priority';
import { Status } from 'src/models/status';
import { TaskForm } from './task-form';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input () featureId: string = "";

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
    userName: ""
  }

  changedTask!: FormGroup<TaskForm>;

  constructor(private readonly fb: FormBuilder, private readonly taskService: FeatureTasksService) {}

  ngOnInit(): void {
    this.changedTask = this.fb.group({
      name: this.fb.nonNullable.control(this.task.name),
      userName: this.fb.nonNullable.control(this.task.userName),
      description: this.fb.nonNullable.control(this.task.description),
      addDate: this.fb.nonNullable.control(this.task.addDate),
      endDate: this.fb.nonNullable.control(this.task.endDate),
      startDate: this.fb.nonNullable.control(this.task.startDate),
      expectedExecutionTime: this.fb.nonNullable.control(this.task.expectedExecutionTime),
    })
  }

  @Output () onSaved = new EventEmitter();
  onSave() {
    const task : FeatureTask = {
      name: this.task.name,
      description: this.task.description,
      addDate: this.task.addDate,
      endDate: this.task.endDate,
      expectedExecutionTime: this.task.expectedExecutionTime,
      priority: this.task.priority,
      startDate: this.task.startDate,
      status: this.task.status,
      userName: this.task.userName,
      featureId: this.featureId
    }

    this.taskService.AddOrUpdateTask(task);
    this.onSaved.emit();
  }

  priorityChanged(event: Priority) {
    this.task.priority = event;
  }

  statusChanged(event: Status) {
    this.task.status = event;
  }
}
