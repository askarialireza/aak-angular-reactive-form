import * as Interfaces from '../interfaces/index';
import * as Models from '../models/index';

export const groupTypesList: Interfaces.BaseTypeSelect[] = [
    new Models.GroupTypeSelect({
        groupName: 'text',
        title: 'نوشتار',
        hint: 'برای درج انواع متون نوشتاری',
        icon: 'text_format'
    }),
    new Models.GroupTypeSelect({
        groupName: 'select',
        title: 'گزینش',
        hint: 'برای درج انواع فیلد‌های انتخابی و ...',
        icon: 'assignment_turned_in'
    }),
    new Models.GroupTypeSelect({
        groupName: 'date',
        title: 'تاریخ و زمان',
        hint: 'برای درج انواع مقادیر تاریخ و زمان ...',
        icon: 'today'
    }),
    new Models.GroupTypeSelect({
        groupName: 'file',
        title: 'فایل',
        hint: 'برای بارگزاری انواع فایل',
        icon: 'description'
    }),
];


export const TextGroupFields: Interfaces.BaseTypeSelect[] = [
    new Models.FieldTypeSelect({
        groupName: 'text',
        type: 'input',
        fieldItems: [new Models.InputFieldItem({})],
        title: 'متن کوتاه',
        hint: 'مناسب برای درج انواع عبارت‌های نوشتاری کوتاه مانند مشخصات فردی و ...',
        icon: 'text_format'
    }),
    new Models.FieldTypeSelect({
        groupName: 'text',
        type: 'textarea',
        fieldItems: [new Models.TextareaFieldItem({}), new Models.SummernoteFieldItem({})],
        title: 'متن بلند',
        hint: 'مناسب برای درج انواع متون طولانی مانند توضیحات و ...',
        icon: 'format_align_right'
    }),
    new Models.FieldTypeSelect({
        groupName: 'text',
        type: 'number',
        fieldItems: [new Models.NumberFieldItem({})],
        title: 'اعداد',
        hint: 'مناسب برای درج انواع عبارات عددی مانند کد ملی ، کد پستی و ...',
        icon: 'looks_one'
    }),
    new Models.FieldTypeSelect({
        groupName: 'text',
        type: 'email',
        fieldItems: [new Models.EmailFieldItem({})],
        title: 'پست الکترونیکی',
        hint: 'مناسب برای درج پست الکترونیکی به همراه اعتبار سنجی ...',
        icon: 'email'
    }),
    new Models.FieldTypeSelect({
        groupName: 'text',
        fieldItems: [new Models.InputFieldItem({})],
        title: 'شماره تماس',
        hint: 'مناسب برای درج انواع شماره تماس مانند شماره تلفن ثابت یا تلفن همراه ...',
        icon: 'call'
    }),
];

export const SelectGroupFields: Interfaces.BaseTypeSelect[] = [
    new Models.FieldTypeSelect({
        groupName: 'select',
        type:'select',
        fieldItems: [new Models.SelectFieldItem({}), new Models.RadioFieldItem({}), new Models.TextareaFieldItem({})],
        title: 'تک انتخابی',
        hint: 'مناسب برای انتخاب یک گزینه از بین انتخاب‌ها',
        icon: 'radio_button_checked'
    }),
    new Models.FieldTypeSelect({
        groupName: 'select',
        type:'select',
        fieldItems: [new Models.MultiCheckboxFieldItem({})],
        title: 'چند انتخابی',
        hint: 'مناسب برای انتخاب چند گزینه از بین انتخاب‌ها',
        icon: 'check_box'
    }),
    new Models.FieldTypeSelect({
        groupName: 'select',
        type:'toggle',
        fieldItems: [new Models.CheckboxFieldItem({}), new Models.ToggleFieldItem({})],
        title: 'فعال / غیرفعال',
        hint: 'مناسب برای فیلد‌های دو گزینه ای مانند بله / خیر و ...',
        icon: 'toggle_off'
    }),
];

export const DateGroupFields: Interfaces.BaseTypeSelect[] = [
    new Models.FieldTypeSelect({
        groupName: 'date',
        fieldItems: [new Models.DateFieldItem({}), new Models.DateRangeFieldItem({})],
        title: 'تاریخ',
        hint: 'مناسب برای انتخاب یک گزینه از بین انتخاب‌ها',
        icon: 'text_format'
    }),
    new Models.FieldTypeSelect({
        groupName: 'date',
        fieldItems: [new Models.DateFieldItem({})],
        title: 'زمان',
        hint: 'مناسب برای انتخاب چند گزینه از بین انتخاب‌ها',
        icon: 'text_format'
    }),
];

export const ChooseFieldType: Interfaces.FieldType =
    new Models.FieldType({
        title: 'افزودن فیلد',
        group: 'create',
        items: groupTypesList,
    });

export const TextFieldType: Interfaces.FieldType =
    new Models.FieldType({
        title: 'نوشتار',
        group: 'text',
        items: TextGroupFields,
    });

export const SelectFieldType: Interfaces.FieldType =
    new Models.FieldType({
        title: 'انتخاب',
        group: 'select',
        items: SelectGroupFields,
    });

export const DateFieldType: Interfaces.FieldType =
    new Models.FieldType({
        title: 'انتخاب',
        group: 'select',
        items: DateGroupFields,
    });
