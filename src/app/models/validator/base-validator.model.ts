import * as Interfaces from "../../interfaces/index";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export class BaseValidator implements Interfaces.BaseValidator {

    constructor(init?: Partial<BaseValidator>) {    
        Object.assign(this, init);
    }

    name: string;
    message: string;
    validator: RxwebValidators;
}