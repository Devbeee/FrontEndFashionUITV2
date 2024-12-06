import { instance as axiosClient } from '@/configs'
import { IGetProductsParams } from '@/interfaces'

export const productApi = {
    findAllProducts: async () => {
        return await axiosClient.get('/product')
    },
    findOneProduct: async (productId: string) => {
        return await axiosClient.get(`/product/${productId}`)
    },
    getProducts: async (getProductsParams: IGetProductsParams) => {
        const { page, limit, sortStyle, categoryGender, price, categoryType, colorName } = getProductsParams
        const url = `/product/list?page=${page}&limit=${limit}&sortStyle=${sortStyle}&categoryGender=${categoryGender}&price=${price}&categoryType=${categoryType}&colorName=${colorName}`
        return axiosClient.get(url)
    }
}