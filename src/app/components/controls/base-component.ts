import { Injectable, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldItem } from '../../models/field-item';

export abstract class BaseComponent implements OnInit {

    constructor() {
    }

    @Input() field: FieldItem;

    @Input() group: FormGroup;

    @Input() editable: boolean;

    @Input() horizontalMode : boolean;

    ngOnInit() { 
        
     }

     getValidClass() {
        if ((this.group.get(this.field.name).dirty || this.group.get(this.field.name).touched)) {
            if (this.group.get(this.field.name).errors) {
                return ('is-invalid');
            } else {
                return ('');
            }
        }
    }

}