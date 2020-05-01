import * as Models from '../index';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export class RequiredValidator extends Models.BaseValidator {

    constructor(init?: Partial<RequiredValidator>) {
        super(init);
        this.validator = RxwebValidators.required({ message: init.message });
        this.name = 'required';
        Object.assign(this, init);
    }
}
