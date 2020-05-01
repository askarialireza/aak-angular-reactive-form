import * as Models from '../index';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export class ChoiceValidator extends Models.BaseValidator {

    constructor(init?: Partial<ChoiceValidator>) {
        super(init);
        this.name = 'choice';
        this.validator = RxwebValidators.choice({ message: init.message, minLength: this.minLength, maxLength: this.maxLength });
        Object.assign(this, init);
    }

    minLength: number;
    maxLength: number;
}