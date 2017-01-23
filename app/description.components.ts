import { Component, Input } from '@angular/core';
import { Certificate } from './certificate';

@Component({
  selector: 'description',
  templateUrl: 'app/description.component.html',
  styleUrls: [ 'app/description.component.css' ],
})

export class DescriptionComponent {
  @Input()
  certificate: Certificate[]
}
