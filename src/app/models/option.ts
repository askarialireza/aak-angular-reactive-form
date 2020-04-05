import { Guid } from 'guid-typescript';
import * as Interfaces from '../exports/interface.namespace';

export class Option implements Interfaces.Option {

    constructor(init?: Partial<Option>) {
        this.id = Guid.create().toString();
        Object.assign(this, init);
    }

    id: string;
    value: string;
    icon: string;

}