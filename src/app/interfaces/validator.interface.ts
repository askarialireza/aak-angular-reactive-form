import { Validators } from '@angular/forms';

export interface Validator {
    name: string;
    validator: Validators;
    message: string;
}