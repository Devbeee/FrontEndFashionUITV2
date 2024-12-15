import { instance as axiosClient } from '@/configs'
import { SortOptions } from '@/utils'

export const orderApi = {
  getAllOrders: async () => {
    return await axiosClient.get('/orders/all')
  },
  getOrders: async (page: number, limit?: number, keyword?: string, sortBy?: SortOptions) => {
    return await axiosClient.get(
      `/orders/?page=${page}${limit ? `&limit=${limit}` : ''}${keyword ? `&keyword=${keyword}` : ''}${sortBy ? `&sortBy=${sortBy}` : ''}`
    )
  }
}
