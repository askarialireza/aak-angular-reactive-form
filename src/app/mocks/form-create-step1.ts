import * as Interfaces from '../exports/interface.namespace';
import * as Models from '../exports/model.namespace';

export const stepOneFieldItems: Interfaces.BaseFieldItem[] = [
  new Models.InputFieldItem({
    name: 'name',
    label: "نام",
    placeholder: "عنوان فرم خود را وارد نمایید",
    order: 1,
    required: true,
  }),
  new Models.UploadFieldItem({
    name: "logo",
    label: "لوگو",
    placeholder: 'متن نمایشی',
    hint: 'در صورت نیاز، لوگوی مورد نظر در ابتدای فرم نمایش داده خواهد شد',
    order: 2,
  }),
  new Models.DateRangeFieldItem({
    name: "date",
    label: "بازه زمانی",
    placeholder: 'بازه زمانی فعالیت فرم را مشخص نمایید',
    order: 3,
    hint: 'در صورت عدم تعیین، بازه زمانی فرم نامحدود خواهد بود',
  }),
];

export const stepOneForm: Interfaces.Form =
  new Models.Form({
    name: "createform",
    fieldItems: stepOneFieldItems,
    
  });