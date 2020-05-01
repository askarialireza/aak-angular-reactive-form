import * as Interfaces from '../interfaces/index';
import * as Models from '../models/index';

export const stepOneFieldItems: Interfaces.BaseFieldItem[] = [
  new Models.InputFieldItem({
    name: 'name',
    label: 'نام',
    placeholder: 'عنوان فرم خود را وارد نمایید',
    order: 1,
    required: true,
  }),
  new Models.UploadFieldItem({
    name: 'logo',
    label: 'لوگو',
    placeholder: 'متن نمایشی',
    hint: 'در صورت نیاز، لوگوی مورد نظر در ابتدای فرم نمایش داده خواهد شد',
    order: 2,
  }),
  new Models.DividerFieldItem({
    name: 'divider1',
    order: 3
  }),
  new Models.DateRangeFieldItem({
    name: 'date',
    label: 'بازه زمانی',
    placeholder: 'بازه زمانی فعالیت فرم را مشخص نمایید',
    order: 4,
    hint: 'در صورت عدم تعیین، بازه زمانی فرم نامحدود خواهد بود',
  }),
  new Models.EmailFieldItem({
    name: 'email',
    label: 'پست الکترونیکی',
    required: true,
    order: 5
  }),
  new Models.MultiToggleFieldItem({
    name: 'choice1',
    label: 'چند انتخابی',
    inlineView: false,
    required: true,
    minSelected:2,
    columns: 3,
    order:6,
    options: [
      new Models.Option({ index: 1, value: 'آیتم 1' }),
      new Models.Option({ index: 2, value: 'آیتم 2' }),
      new Models.Option({ index: 3, value: 'آیتم 3' }),
      new Models.Option({ index: 4, value: 'آیتم 4' }),
      new Models.Option({ index: 5, value: 'آیتم 5' }),
      new Models.Option({ index: 6, value: 'آیتم 6' }),
      new Models.Option({ index: 7, value: 'آیتم 7' }),
      new Models.Option({ index: 8, value: 'آیتم 8' }),
      new Models.Option({ index: 9, value: 'آیتم 9' }),
    ]
  })
];

export const stepOneForm: Interfaces.Form =
  new Models.Form({
    name: 'createform',
    fieldItems: stepOneFieldItems,

  });
