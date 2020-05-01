import { RxwebValidators } from '@rxweb/reactive-form-validators';

export interface BaseValidator {
    name: string;
    message: string;
    validator : RxwebValidators
}
