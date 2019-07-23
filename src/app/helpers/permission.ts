export class Permissions implements Deserializable {
    'view': boolean = false;
    'edit': boolean = false;
    'View on the map': boolean = false;
    'create': boolean = false;
    'delete': boolean = false;
    'download': boolean = false;
    deserialize(input: any): any {
        Object.assign(this, input);
        return this;
    }
    constructor() {
        this.create = false;
    }

}
export interface Deserializable {
    deserialize(input: any): this;
}