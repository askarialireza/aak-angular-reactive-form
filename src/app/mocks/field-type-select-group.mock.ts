import { InputFieldItem, TextareaFieldItem, NumericInputFieldItem, SummernoteFieldItem } from '../mocks/field-items.mock';
import { FieldTypeSelect } from '../models/field-type-select';
export const InputGroupFields: FieldTypeSelect[] = [
    {
        type: 'text',
        group:'text',
        fieldType: InputFieldItem,
        title: 'متن کوتاه',
        hint: 'مناسب برای درج انواع عبارت‌های نوشتاری کوتاه مانند مشخصات فردی و ...',
        icon: 'text_format'
    },
    {
        type: 'textarea',
        group:'text',
        fieldType: TextareaFieldItem,
        title: 'متن بلند',
        hint: 'مناسب برای درج انواع متون طولانی مانند توضیحات و ...',
        icon: 'format_align_right'
    },
    {
        type: 'summernote',
        group:'text',
        fieldType: SummernoteFieldItem,
        title: 'متن بلند (بلاگ)',
        hint: 'مناسب برای وبلاگ نویسی به همراه امکانات پیشرفته',
        icon: 'format_align_right'
    },
    {
        type: 'number',
        group:'text',
        fieldType: NumericInputFieldItem,
        title: 'اعداد',
        hint: 'مناسب برای درج انواع عبارات عددی مانند کد ملی ، کد پستی و ...',
        icon: 'looks_one'
    },
    {
        type: 'email',
        group:'text',
        fieldType: InputFieldItem,
        title: 'پست الکترونیکی',
        hint: 'مناسب برای درج پست الکترونیکی به همراه اعتبار سنجی ...',
        icon: 'email'
    },
    {
        type: 'call',
        group:'text',
        fieldType: InputFieldItem,
        title: 'شماره تماس',
        hint: 'مناسب برای درج انواع شماره تماس مانند شماره تلفن ثابت یا تلفن همراه ...',
        icon: 'call'
    },
];