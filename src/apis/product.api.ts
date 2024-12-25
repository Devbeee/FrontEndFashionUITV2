import { instance as axiosClient } from '@/configs'
import { IGetProductsParams } from '@/interfaces'

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
  }
}
