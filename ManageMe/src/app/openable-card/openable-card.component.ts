import { Component, HostBinding, Input } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { BorderColor } from 'src/models/border-color';
import { Feature } from 'src/models/feature';
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

  @Input () borderColor: BorderColor = BorderColor.Orange

  @HostBinding('style.height')
  hostHeight: string = '20px';

  @HostBinding('style.border')
  hostBorderColor: string = "3px solid " + this.borderColor;
  
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
