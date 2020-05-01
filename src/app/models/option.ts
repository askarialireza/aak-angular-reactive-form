import { Guid } from 'guid-typescript';
import * as Interfaces from '../interfaces/index';

export class Option implements Interfaces.Option {

    constructor(init?: Partial<Option>) {
        this.id = Guid.create().toString();
        Object.assign(this, init);
    }
    
    index: number;
    id: string;
    value: string;
    icon: string;

}