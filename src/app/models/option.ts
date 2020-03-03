import { Guid } from 'guid-typescript';

export class Option {

    constructor () {
        let guid = Guid.create().toString();
        // this.key =  guid;
        this.id = guid;
        this.disabled = false;
    }
    
    public id: string;
    // public key?: string;
    public value: string;
    public disabled?: boolean;

}