import * as Models from '../index';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export class EmailValidator extends Models.BaseValidator {
    constructor(init?: Partial<EmailValidator>) {
        super(init);
        this.name = 'email';
        this.validator = RxwebValidators.email({ message: init.message });
        Object.assign(this, init);
    }
}