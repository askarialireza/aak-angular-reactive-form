import { FieldItem } from '../models/field-item';
import { Validators, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';
import { BASE_URL } from './backend.mock';

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
        value: `forms/view/${Guid.create().toString()}`,
        readonly: true,
        width: 12,
        order: 3,
    },
    {
        id: Guid.create().toString(),
        name: "date",
        label: "Date",
        type: "daterange",
        width: 12,
        order: 4,
    },
    {
        id: Guid.create().toString(),
        name: "options",
        required: false,
        type: "multicheckbox",
        inlineView: false,
        width: 12,
        order: 6,
        options: [
            {id:"check-active",value:"Active",disabled:false},
            {id:"check-horizontal",value:"Horizontal",disabled:false},
        ],
    },
]


export const FormCreate: Form = {
    id: Guid.create().toString(),
    name: "createform",
    isActive: true,
    isHorizontal: false,
    editMode: false,
    fieldItems: FormCreateItems,
};



