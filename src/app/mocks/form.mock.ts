import { FieldItem } from '../models/field-item';
import { Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';

let _formId : string = Guid.create().toString();

export const TestFieldItems: FieldItem[] = [
    {
        id: Guid.create().toString(),
        name: "input",
        required: true,
        type: "input",
        placeholder: "Test Input",
        label: "Test Input",
        order: 2,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Input is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "uploadfile",
        required: true,
        type: "upload",
        placeholder: "Test Input",
        label: "Test Input",
        order: 2,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Input is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "radio",
        required: true,
        type: "radiobutton",
        label: "Test Radio Label",
        inlineView: true,
        order: 2,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Radio is Required.`,
            },
        ],
        options: [
            { id: Guid.create().toString(), value: "Option 1", },
            { id: Guid.create().toString(), value: "Option 2", },
            { id: Guid.create().toString(), value: "Option 3", },
            { id: Guid.create().toString(), value: "Option 4", },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "range",
        required: true,
        type: "range",
        label: "Test Range",
        minValue: 1,
        maxValue: 6,
        order: 2,
        width: 12,
    },
    {
        id: Guid.create().toString(),
        name: "summernote",
        required: true,
        type: "summernote",
        placeholder: "Test Summernote",
        label: "Test Summernote Label",
        order: 9,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Summernote is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "textarea",
        required: true,
        type: "textarea",
        placeholder: "Test Textarea",
        label: "Test Textarea Label",
        order: 10,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Textarea is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "inputwithvalidation",
        required: true,
        minlength: 3,
        maxlength: 20,
        type: "input",
        placeholder: "Test Input",
        label: "Test Input 2 Label",
        order: 3,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Input 2 is Required.`,
            },
            {
                name: "minlength",
                validator: Validators.minLength(3),
                message: `Minimum Length of Label is 3 Characters.`
            },
            {
                name: "maxlength",
                validator: Validators.maxLength(20),
                message: `Maximum Length of Label is 20 Characters.`
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "date",
        required: true,
        type: "date",
        placeholder: "Test Date",
        label: "Test Date",
        order: 2,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Date is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "daterange",
        type: "daterange",
        placeholder: "Test Date Range",
        label: "Test Date Range",
        inlineView: false,
        order: 2,
        width: 12,
        required:true,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Date Range is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "inputnumber",
        required: true,
        minValue: 3,
        maxValue: 20,
        type: "input",
        inputType: "number",
        placeholder: "Test Number",
        label: "Test Label Number",
        order: 3,
        width: 12,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Label Number is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "testselect",
        required: true,
        type: "select",
        placeholder: "Test Select",
        label: "Test Label Select",
        order: 6,
        width: 12,
        options: [
            { id: Guid.create().toString(), value: "Option 1", },
            { id: Guid.create().toString(), value: "Option 2", },
            { id: Guid.create().toString(), value: "Option 3", },
            { id: Guid.create().toString(), value: "Option 4", },
        ],
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Label Number is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "testmultiple",
        required: true,
        type: "multicheckbox",
        placeholder: "Test",
        label: "Test Multiple",
        inlineView : true,
        order: 3,
        width: 12,
        options: [
            { id: Guid.create().toString(), value: "Option 1", disabled: false },
            { id: Guid.create().toString(), value: "Option 2", disabled: false },
            { id: Guid.create().toString(), value: "Option 3", disabled: false },
            { id: Guid.create().toString(), value: "Option 4", disabled: false },
        ],
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Choose at least one`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "testradiob",
        required: true,
        type: "radio",
        placeholder: "Test Select",
        label: "Test Label Select",
        order: 5,
        width: 12,
        inlineView: true,
        options: [
            { id: Guid.create().toString(), value: "Option 1", },
            { id: Guid.create().toString(), value: "Option 2", },
            { id: Guid.create().toString(), value: "Option 3", },
            { id: Guid.create().toString(), value: "Option 4", },
        ],
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Label Number is Required.`,
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "testcheckbox",
        required: true,
        type: "checkbox",
        placeholder: "You Must Accept",
        label: "Test Label Select",
        order: 5,
        width: 12,
        value: null,
        validations: [
            {
                name: "required",
                validator: Validators.requiredTrue,
                message: `You Must Accept.`,
            },
        ],
    },
];

export const TestFormItem: Form = {
    id: _formId,
    url: `forms/view/${_formId}`,
    isHorizontal: true,
    editMode: true,
    name: 'Test Form',
    fieldItems: TestFieldItems,
}
