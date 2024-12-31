import { instance as axiosClient } from '@/configs'
import { IGetProductsParams, IGetRelatedParams } from '@/interfaces'

export const productApi = {
    findAllProducts: async () => {
        return await axiosClient.get('/product')
    },
    findOneProduct: async (productId: string) => {
        return await axiosClient.get(`/product/${productId}`)
    },
    getProducts: async ({ page, ...optionalParams }: IGetProductsParams) => {
        const validParams = Object.fromEntries(
        Object.entries({ page,...optionalParams }).filter(([, value]) => value !== undefined)
        ) as Partial<IGetProductsParams>

        const queryString = new URLSearchParams(validParams as Record<string, string>).toString()

        const url = `/product/list?${queryString}`
        return axiosClient.get(url)
    },
    getDiscountProduct: async () => {
        return await axiosClient.get('/product/discounted')
    },
    getTopSellingProducts: async () => {
        return await axiosClient.get('/product/top-selling')
    },
    findOneBySlug: async (slug: string) => {
        return await axiosClient.get(`/product/slug/${slug}`)
    },
    findRelatedProducts: async (params: IGetRelatedParams) => {
        return axiosClient.get('/product/related', {params});
    }
}
