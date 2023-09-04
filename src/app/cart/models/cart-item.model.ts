import { Product } from "src/app/shared/models/Product";

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number
    ) { };
}