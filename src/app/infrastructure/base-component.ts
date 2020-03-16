import { OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldItem } from '../models/field-item';

export abstract class BaseComponent implements OnInit {

    constructor() {
    }

    @Input() field: FieldItem;

    @Input() group: FormGroup;

    @Input() editable: boolean;

    @Input() horizontalMode : boolean;

    ngOnInit() { 
        
     }

}