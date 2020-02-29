import { FieldItem } from '../models/field-item';
import { Validators, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';

export const FormCreateItems: FieldItem[] = [
    {
        id: Guid.create().toString(),
        name: "name",
        label: "Name",
        type: "input",
        placeholder: "Form Name",
        width: 12,
        order: 1,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: "Form Name is Required",
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "action",
        label: "Action",
        type: "input",
        placeholder: "Action",
        width: 12,
        order: 2,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: "Action is Required",
            },
        ]
    },
    {
        id: Guid.create().toString(),
        name: "horizontal",
        // label: "Horizontal Form",
        type: "checkbox",
        placeholder: "Horiontal Form",
        width: 12,
        value: false,
        order: 3,
    }
]

