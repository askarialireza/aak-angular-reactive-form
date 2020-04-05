import { OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as Interfaces from '../interfaces/field-item/base-field-item.interface';

export abstract class BaseComponent implements OnInit {

    constructor() {
    }

    @Input() field: Interfaces.BaseFieldItem;

    @Input() group: FormGroup;

    ngOnInit() { 
        
     }

}