import { Guid } from 'guid-typescript';

export class Option {

    constructor() {
        let guid = Guid.create().toString();
        this.id = guid;
        this.disabled = false;
    }

    public id: string;
    public value: string;
    public disabled?: boolean;
    public icon?: string;

}