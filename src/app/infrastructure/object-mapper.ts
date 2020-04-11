import * as Models from '../models/index'
import * as Interfaces from '../interfaces/index';

const fieldItemMapper = {
    input: 'InputFieldItem',
    checkbox: 'CheckboxFieldItem',
    date: 'DateFieldItem',
    daterange: 'DateRangeFieldItem',
    multicheckbox: 'MultiCheckboxFieldItem',
    radio: 'RadioFieldItem',
    buttontoggle: 'ButtonToggleFieldItem',
    range: 'RangeFieldItem',
    select: 'SelectFieldItem',
    summernote: 'SummernoteFieldItem',
    textarea: 'TextareaFieldItem',
    upload: 'UploadFieldItem',
    toggle: 'ToggleFieldItem',
    option: 'OptionFieldItem',
    divider: 'DividerFieldItem',
    width: 'WidthFieldItem',
    multitoggle: 'MultiToggleFieldItem',
};

export class ObjectMapper {
    static MapForm(form: Interfaces.Form): Models.Form {

        if (form.formUiSetting) {
            form.formUiSetting = new Models.FormUISetting(form.formUiSetting);
        }

        if (form.formResultSetting) {
            form.formResultSetting = new Models.FormResultSetting(form.formResultSetting);
        }

        form.fieldItems.forEach(fieldItem => {

            let item: Interfaces.BaseFieldItem;

            fieldItem.validations = (fieldItem.validations.length > 0) ? [] : null;

            item = new Models[fieldItemMapper[fieldItem.type]](fieldItem);

            Object.assign(fieldItem, item);
        });

        return form;
    }
}
