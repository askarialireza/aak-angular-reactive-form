import * as Interfaces from '../interfaces/index';
import * as Models from '../models/index';

export const createOrUpdateFieldItems: Interfaces.BaseFieldItem[] = [
    new Models.InputFieldItem({
        id: 'name',
        name: 'name',
        label: 'عنوان فیلد',
        order: 1,
        required: true,
    }),
    new Models.InputFieldItem({
        id: 'placeholder',
        name: 'placeholder',
        label: 'متن نمایشی',
        hint: 'متنی به عنوان پیش‌نمایش درون فیلد‌های نوشتاری یا جلو‌ فیلد انتخابی داده می‌شود',
        order: 2,
    }),
    new Models.InputFieldItem({
        id: 'hint',
        name: 'hint',
        label: 'توضیحات',
        hint: 'متنی به عنوان توضیحات فیلد در پایین فیلد نمایش داده می‌شود',
        order: 2,
    }),
    new Models.ToggleFieldItem({
        id: 'required',
        name: 'required',
        value: false,
        hint: 'با فعالسازی، کاربر موظف به تکمیل فیلد مورد نظر می‌باشد',
        placeholder: 'فیلد اجباری',
        order: 3,
    }),
    new Models.RangeFieldItem({
        id: 'width',
        name: 'width',
        label: 'عرض فیلد',
        hint: 'فیلد مورد نظر چه اندازه از عرض ردیف خود را پوشش دهد',
        value: 12,
        minValue: 1,
        maxValue: 12,
        displayFormat: formatLabel,
        order: 4,
    }),
];

export const textAreaTypeSelectFieldItem: Interfaces.BaseFieldItem =
    new Models.RadioFieldItem({
        id: 'textarea-type',
        name: 'textarea-type',
        label: 'نوع ویرایشگر متن',
        inlineView: true,
        required: true,
        order: 5,
        width: 12,
        options: [
            new Models.Option({ id: 'textarea', value: 'ویرایشگر متن ساده' }),
            new Models.Option({ id: 'summernote', value: 'ویرایشگر متن پیشرفته' }),
        ],
    });

export const optionTypeSelectFieldItem: Interfaces.BaseFieldItem[] = [
    new Models.RadioFieldItem({
        id: 'select-type',
        name: 'select-type',
        label: 'نوع انتخاب‌گر',
        inlineView: true,
        required: true,
        order: 5,
        width: 12,
        options: [
            new Models.Option({ id: 'select', value: 'انتخاب‌گر کشویی' }),
            new Models.Option({ id: 'radio', value: 'انتخاب‌گر گزینه‌ای' }),
        ],
    }),
    new Models.OptionFieldItem({
        id: 'options',
        name: 'options',
        required: true,
        order: 6,
    })
]



function formatLabel(value: number) {
    return Math.round((value / 12) * 100) + '%';
}