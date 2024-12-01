export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    images: { imgUrl: string }[];
    discount: number;
    category?: {
        gender: string;
        type: string;
    }
};

export interface IProductComp extends IProduct {
    ranking?: number;
    productCount?: boolean; 
    productCountSale?: boolean;
    sold?: number;
    saleCount?: number;
}

export interface ICartProduct extends Pick<IProduct, 'name' | 'price' | 'discount'> {
    id: string;
    size: string;
    color: string;
    quantity: number,
    image: string,
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

export interface IGetProductsParams {
    page: number;
    limit: number;
    sortStyle?: string;
    categoryGender?: string;
    price?: string;
    categoryType?: string;
    colorName?: string;
}

export interface IGetProductsResponse {
    id: string; 
    name: string;
    description: string;
    price: number;
    category?: {
        gender: string;
        type: string;
    }
    slug: string;
    discount: number;
    createdAt: Date;
    updatedAt: Date;
    productDetails: IProductDetail[];
}

export interface IProductDetail {
    id: string,
    size: string,
    colorName: string,
    color: string,
    imgUrl: string,
    stock: number
}