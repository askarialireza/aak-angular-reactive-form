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
    },
    {
        id: Guid.create().toString(),
        name: "url",
        label: "Url",
        type: "input",
        placeholder: 'SAMPLE URL',
        readonly: true,
        width: 12,
        order: 3,
    },
    {
        id: Guid.create().toString(),
        name: "startDate",
        label: "Start Date",
        type: "date",
        width: 6,
        order: 4,
    },
    {
        id: Guid.create().toString(),
        name: "endDate",
        label: "End Date",
        type: "date",
        width: 6,
        order: 5,
    },
    {
        id: Guid.create().toString(),
        name: "active",
        type: "checkbox",
        placeholder: "Active",
        width: 6,
        value: false,
        order: 6,
    },
    {
        id: Guid.create().toString(),
        name: "horizontal",
        type: "checkbox",
        placeholder: "Horiontal Form",
        width: 6,
        value: false,
        order: 7,
    }
]


export const FormCreate: Form = {
    id: Guid.create().toString(),
    name: "createform",
    isActive: true,
    isHorizontal: false,
    editMode: false,
    fieldItems: FormCreateItems,
};


