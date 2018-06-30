import { Animal } from "./Animal";

export class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    public move(quantity: number) {
        console.log('This method run in Horse class');
        super.move(quantity);
    }
}