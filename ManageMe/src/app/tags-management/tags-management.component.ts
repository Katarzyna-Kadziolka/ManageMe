import { Priority } from './../../models/priority';
import { Status } from './../../models/status';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags-management',
  templateUrl: './tags-management.component.html',
  styleUrls: ['./tags-management.component.scss']
})
export class TagsManagementComponent {
  statusList = [
    Status.Todo,
    Status.Doing,
    Status.Done
  ]
  statusIndex = 0;
  status = this.statusList[this.statusIndex];

  priorityList = [
    Priority.Must,
    Priority.Could,
    Priority.Should
  ]
  priorityIndex = 0;
  priority = this.priorityList[this.priorityIndex];

  changeStatus() {
    if(this.statusIndex === this.statusList.length - 1) {
      this.statusIndex = 0;
    }
    else {
      this.statusIndex ++;
    }
    this.status = this.statusList[this.statusIndex];
  }

  changePriority() {
    if(this.priorityIndex === this.priorityList.length - 1) {
      this.priorityIndex = 0;
    }
    else {
      this.priorityIndex ++;
    }
    this.priority = this.priorityList[this.priorityIndex];
  }
}
