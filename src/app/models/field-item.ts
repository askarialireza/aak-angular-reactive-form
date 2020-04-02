import { Option } from './option';
import { Validator } from './validator';
import { Guid } from 'guid-typescript';

export class FieldItem {

    constructor(options: {
        id?: string,
        name?: string,
        placeholder?: string,
        value?: string,
        type?: string
        inputType?: string,
        label?: string,
        required?: boolean,
        order?: number,
        validations?: Validator[],
        options?: Option[],
        color?: string,
        minValue?: number,
        maxValue?: number,
        minlength?: number,
        maxlength?: number,
        readonly?: boolean,
        pattern?: string,
        autocomplete?: boolean,
        inlineView?: boolean,
        width?: number,
        disabled?: boolean,
        height?: number,
        uploadPath?: string,
        class?: string,
        formId?: string,
        icon?: string,
        hint?: string,
        displayFormat?:any,
    } = {}) {
        this.id = (options.id) ? options.id : Guid.create().toString();
        this.name = (options.name) ? options.name : Guid.create().toString();
        this.value = options.value;
        this.placeholder = options.placeholder || null;
        this.type = options.type || null;
        this.inputType = options.inputType || null;
        this.label = options.label || null;
        this.required = !!options.required;
        this.order = (options.order) ? options.order : 1;
        this.validations = options.validations || null;
        this.options = options.options || null;
        this.color = options.color || null;
        this.autocomplete = options.autocomplete || null;
        this.pattern = options.pattern || null;
        this.readonly = options.readonly || null;
        this.maxlength = options.maxlength || null;
        this.minlength = options.minlength || null;
        this.minValue = options.minValue || null;
        this.maxValue = options.maxValue || null;
        this.inlineView = options.inlineView || null;
        this.disabled = options.disabled || null;
        this.width = options.width || 12;
        this.height = options.height || null;
        this.uploadPath = options.uploadPath || null;
        this.class = options.class || null;
        this.formId = options.formId || null;
        this.icon = options.icon || null;
        this.hint = options.hint || null;
        this.displayFormat = options.displayFormat || null;
    }

    public id?: string;
    public name?: string;
    public placeholder?: string;
    public value?: any;
    public type?: string;
    public inputType?: string;
    public label?: string;
    public required?: boolean;
    public order?: number;
    public validations?: Validator[];
    public options?: Option[];
    public color?: string;
    public inlineView?: boolean;
    public minValue?: number;
    public maxValue?: number;
    public minlength?: number;
    public maxlength?: number;
    public width?: number;
    public disabled?: boolean;
    public readonly?: boolean;
    public pattern?: string;
    public autocomplete?: boolean;
    public height?: number;
    public uploadPath?: string;
    public class?: string;
    public formId?: string;
    public icon?: string;
    public hint?: string;
    public displayFormat?: any;
}
