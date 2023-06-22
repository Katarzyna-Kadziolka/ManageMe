import { FeatureTasksService } from './../../services/feature-tasks-service';
import { FeatureTask } from './../../models/feature-task';
import { TaskFormComponent } from './../task-form/task-form.component';
import { FeaturesService } from './../../services/features-service';
import { Priority } from 'src/models/priority';
import { Feature } from './../../models/feature';
import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Status } from 'src/models/status';
import { BorderColor } from 'src/models/border-color';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
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

  constructor(private featureService: FeaturesService, private taskService: FeatureTasksService ) {}

  borderColor = BorderColor.Orange;

  onDelete() {
    this.featureService.DeleteFeature(this.feature.id);
  }

  @Output () onEditFeature = new EventEmitter();
  onEdit() {    
    this.onEditFeature.emit(this.feature);
  }

  @ViewChild('taskFormContainer', {read: ViewContainerRef}) taskFormContainer!: ViewContainerRef

  createTaskForm() {
    const taskForm = this.taskFormContainer.createComponent(TaskFormComponent);
    taskForm.setInput('featureId', this.feature.id);
    const subscription = taskForm.instance.onSaved.subscribe(() => {
      taskForm.destroy();
      this.changeStatus();
      subscription.unsubscribe();
    })
  }

  onEditTask(task: FeatureTask) {
    this.taskService.DeleteTask(task.name);
    const taskForm = this.taskFormContainer.createComponent(TaskFormComponent);
    taskForm.setInput('featureId', this.feature.id);
    taskForm.setInput('task', task);

    const subscription = taskForm.instance.onSaved.subscribe(() => {
      taskForm.destroy();
      this.changeStatus();
      subscription.unsubscribe();
    })
  }

  changeStatus() {
    if(this.feature.tasks.some((a) => a.status !== Status.Todo)) {
      this.feature.status = Status.Doing;
    }
    if(this.feature.tasks.every((a) => a.status === Status.Done)) {
      this.feature.status = Status.Done;
    }
  }
}
