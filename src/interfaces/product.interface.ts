import { ICategory } from "./category.interface";
export interface IProductDetail {
    id: string,
    size: string,
    colorName: string,
    color: string,
    imgUrl: string,
    stock: number
}
export interface IProduct {  
    id: string; 
    name: string;
    description: string;
    price: number;
    category: ICategory;
    slug: string;
    discount: number;
    createdAt: Date;
    updatedAt: Date;
    productDetails: IProductDetail[];
}

export interface IImage {
    imgUrl: string
}

export interface IColor {
    colorName: string,
    colorHex: string
}

export interface ISize {
    size: string
}

export interface IVoucher {
    id: string,
    name: string,
    discount: number,
    description: string,
    quantity: number
}
