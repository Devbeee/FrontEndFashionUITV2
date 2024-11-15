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
