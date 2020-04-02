import { FieldItem } from '../models/field-item';

export const InputFieldItem: FieldItem = {
    type: 'input',
};

export const NumericInputFieldItem: FieldItem = {
    type: 'input',
    inputType: 'number',
}

export const SummernoteFieldItem: FieldItem = {
    type: 'summernote',
}

export const TextareaFieldItem: FieldItem = {
    type: 'textarea',
}