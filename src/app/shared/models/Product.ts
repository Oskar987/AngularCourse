export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;

    constructor(id: number, name: string, description: string, price: number, isAvailable: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.isAvailable = isAvailable
    }
}