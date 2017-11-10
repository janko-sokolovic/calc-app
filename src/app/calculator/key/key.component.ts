import { Key } from './key';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.css']
})
export class KeyComponent {
    @Input() key: Key;

    @Output()
    hitKey = new EventEmitter();

    clicked($event): void {
        this.hitKey.emit(this.key);
    }
}
