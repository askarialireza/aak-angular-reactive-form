import * as Interfaces from '../exports/interface.namespace';
import * as Models from '../exports/model.namespace';

export const createOrUpdateFieldItems: Interfaces.BaseFieldItem[] = [
    new Models.InputFieldItem({
        id: 'name',
        name: 'name',
        label: 'عنوان فیلد',
        order: 1,
        required: true,
    }),
    new Models.InputFieldItem({
        id: 'hint',
        name: 'hint',
        label: 'عبارت راهنما',
        hint: 'متنی به عنوان راهنما در پایین فیلد نمایش داده می‌شود',
    }),
    new Models.ToggleFieldItem({
        id: 'required',
        name: 'required',
        value: false,
        hint: 'با فعالسازی، کاربر موظف به تکمیل فیلد مورد نظر می‌باشد',
        placeholder: 'فیلد اجباری',
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
    }),
];

export const textAreaTypeSelectFieldItem: Interfaces.BaseFieldItem =
    new Models.RadioFieldItem({
        id: 'textarea-type',
        name: 'textarea-type',
        label: 'نوع ویرایشگر متن',
        inlineView: true,
        required: true,
        width: 12,
        options: [
            { id: 'textarea', value: 'ویرایشگر متن ساده' },
            { id: 'summernote', value: 'ویرایشگر متن پیشرفته' },
        ],
    });


function formatLabel(value: number) {
    return Math.round((value / 12) * 100) + '%';
}