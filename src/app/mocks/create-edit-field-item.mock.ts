import { Validators } from '@angular/forms';
import { FieldItem } from '../models/field-item';

export const CreateUpdateFieldItems = [
    {
        id: 'name',
        name: 'name',
        type: 'input',
        label: 'عنوان فیلد',
        required: true,
        width: 12,
        order: 1,
        validations: [
            {
                name: "required",
                validator: Validators.required,
                message: `درج عنوان فیلد اجباری است`,
            },
        ],
    },
    {
        id: 'hint',
        name: 'hint',
        type: 'input',
        label: 'عبارت راهنما',
        hint: 'متنی به عنوان راهنما در پایین فیلد نمایش داده می‌شود',
        width: 12,
    },
    {
        id: 'required',
        name: 'required',
        type: 'toggle',
        value:false,
        hint: 'با فعالسازی، کاربر موظف به تکمیل فیلد مورد نظر می‌باشد',
        placeholder: 'فیلد اجباری',
        width: 12,
    },
    {
        id: 'width',
        name: 'width',
        label: 'عرض فیلد',
        hint: 'فیلد مورد نظر چه اندازه از عرض ردیف خود را پوشش دهد',
        type: 'range',
        value:12,
        minValue: 1,
        maxValue: 12,
        displayFormat: formatLabel,
        width: 12,
    }
];

// export const TextAreaTypeSelectFieldItem: FieldItem = {
//     id: 'textarea-type',
//     name: 'textarea-type',
//     type: 'radio',
//     label: 'نوع ویرایشگر متن',
//     inlineView: true,
//     required: true,
//     width: 12,
//     options: [
//         { id: 'textarea', value: 'ویرایشگر متن ساده' },
//         { id: 'summernote', value: 'ویرایشگر متن پیشرفته' },
//     ],
//     validations: [
//         {
//             name: "required",
//             validator: Validators.required,
//             message: `تعیین نوع ویرایشگر متن اجباری است`,
//         },
//     ],
// }

function formatLabel(value: number) {
    return Math.round((value / 12) * 100) + '%';
}