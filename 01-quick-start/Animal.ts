export class Animal {
    private name;

    constructor(name: string) {
        this.name = name;
    }

    public move(quantity: number) {
        console.log(`The ${this.name} move ${quantity}`);
    }
}