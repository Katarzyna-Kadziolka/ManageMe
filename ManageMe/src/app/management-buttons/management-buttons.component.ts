import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-management-buttons',
  templateUrl: './management-buttons.component.html',
  styleUrls: ['./management-buttons.component.scss']
})
export class ManagementButtonsComponent {
  @Output() delete = new EventEmitter();
  onDelete(event: any) {
    this.delete.emit(event);
  }
}
