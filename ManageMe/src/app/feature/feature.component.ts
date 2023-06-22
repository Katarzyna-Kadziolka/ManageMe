import { FeaturesService } from './../../services/features-service';
import { Priority } from 'src/models/priority';
import { Feature } from './../../models/feature';
import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  constructor(private featureService: FeaturesService ) {}

  borderColor = BorderColor.Orange;

  onDelete() {
    this.featureService.DeleteFeature(this.feature.id);
  }

  @Output () onEditFeature = new EventEmitter();
  onEdit() {    
    this.onEditFeature.emit(this.feature);
  }
}
