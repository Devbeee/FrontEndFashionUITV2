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