import { instance as axiosClient } from '@/configs'

export const productApi = {
    findAllProducts: async () => {
        return await axiosClient.get('/product')
    },
    findOneProduct: async (productId: string) => {
        return await axiosClient.get(`/product/${productId}`)
    },
}