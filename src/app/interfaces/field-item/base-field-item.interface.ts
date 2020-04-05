import { Validator } from '../../models/validator';

export interface BaseFieldItem {
    id: string;
    name: string;
    type: string
    required: boolean;
    value: any;
    placeholder: string;
    label: string;
    order: number;
    width: number;
    formId: string,
    hint: string;
    disabled: boolean;
    validations: Validator[];
}