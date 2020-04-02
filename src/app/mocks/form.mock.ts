import { FieldItem } from '../models/field-item';
import { Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';
import { Option } from '../models/option';

let _formId : string = Guid.create().toString();

export const Options: Option[] = [
    { id: Guid.create().toString(), value: "گزینه 1", },
    { id: Guid.create().toString(), value: "گزینه 2", },
    { id: Guid.create().toString(), value: "گزینه 3", },
    { id: Guid.create().toString(), value: "گزینه 4", },
];


export const TestFieldItems: FieldItem[] = [
    {
        id: Guid.create().toString(),
        name: "uploadfile",
        required: true,
        type: "upload",
        placeholder: "لطفا فایل مورد نظر خود را بارگزاری نمایید",
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
        name: "toggle",
        required: true,
        type: "toggle",
        hint: 'عبارت راهنمای تستی',
        placeholder: "تست",
        label: "تست عنوان",
        order: 2,
        width: 12,
        value:false,
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
        hint: 'عبارت راهنمای تستی',
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `Test Date Range is Required.`,
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

