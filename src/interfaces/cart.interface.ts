import { IProduct } from "./product.interface";

export interface IFetchedCartItem {
    id: string;
    quantity: number;
    productDetail: {
        id: string;
        size: string;
        colorName: string;
        imgUrl: string;
        stock: number;
        product: {
            name: string;
            price: number;
            discount: number;
        }
    };
}

export interface ICartProduct extends Pick<IProduct, 'name' | 'price' | 'discount'> {
    id: string;
    size: string;
    color: string;
    quantity: number;
    image: string;
    stock: number;
}

export interface IAddToCartData {
    quantity: number;
    cartProductId: string;
}