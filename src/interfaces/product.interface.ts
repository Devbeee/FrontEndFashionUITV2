export interface IProduct {
    id: number;
    name: string;
    price: number;
    discount: number;
    sold: number;
    saleCount: number;
    images: { imgUrl: string }[];
    slug: string;
    category: {}
};

export interface IProductComp extends IProduct {
    ranking?: number;
    productCount?: boolean; 
    productCountSale?: boolean;
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
