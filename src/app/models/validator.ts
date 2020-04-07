import * as Interfaces from '../interfaces/index';
import { Validators } from '@angular/forms';

export class Validator implements Interfaces.Validator {

    constructor(init?: Partial<Validator>) {
        Object.assign(this, init);
    }
    
    name: string;
    validator: Validators;
    message: string;

}