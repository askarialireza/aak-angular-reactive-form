import { FieldItem } from '../models/field-item';
import { Validators, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Form } from '../models/form';
import { BASE_URL } from './backend.mock';

export const FormCreateItems: FieldItem[] = [
    {
        id: Guid.create().toString(),
        name: "name",
        label: "نام",
        type: "input",
        placeholder: "عنوان فرم خود را وارد نمایید",
        width: 12,
        order: 1,
        required:true,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: "درج نام اجباری است",
            },
        ],
    },
    {
        id: Guid.create().toString(),
        name: "logo",
        label: "لوگو",
        type: "upload",
        hint: 'در صورت نیاز، لوگوی مورد نظر در ابتدای فرم نمایش داده خواهد شد',
        width: 12,
        order: 3,
    },
    {
        id: Guid.create().toString(),
        name: "date",
        label: "بازه زمانی",
        placeholder: 'بازه زمانی فعالیت فرم را مشخص نمایید',
        type: "daterange",
        width: 12,
        order: 4,
        hint: 'در صورت عدم تعیین، بازه زمانی فرم نامحدود خواهد بود',
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



