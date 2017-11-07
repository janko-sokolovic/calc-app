import { Key } from './key';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.css']
  })
export class KeyComponent {
    @Input() key: Key;
}
