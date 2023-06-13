import { Component, HostBinding, Input, SimpleChanges } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { BorderColor } from 'src/models/border-color';
import { Priority } from 'src/models/priority';
import { Status } from 'src/models/status';

@Component({
  selector: 'app-openable-card',
  templateUrl: './openable-card.component.html',
  styleUrls: ['./openable-card.component.scss']
})
export class OpenableCardComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp; 

  @Input () title: string = "";
  @Input () status: Status = Status.Todo;
  @Input () priority: Priority = Priority.Must;
  @Input () borderColor: string = BorderColor.Orange

  @HostBinding('style.height')
  hostHeight: string = '20px';

  @HostBinding('style.border')
  hostBorderColor: string = "";
  
  ngOnChanges(changes: SimpleChanges) {
    if ('borderColor' in changes) {
      this.hostBorderColor = "3px solid " + this.borderColor;
    }
  }

  isOpen = false;

  onArrowClick() {
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      this.hostHeight = 'auto';
      return;
    }
    this.hostHeight = '20px';
  }
}
