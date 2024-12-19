import { instance as axiosClient } from '@/configs'
import { FilterOptions, SortOptions } from '@/utils'

export const orderApi = {
  getAllOrders: async () => {
    return await axiosClient.get('/order/all')
  },
  getOrders: async (page: number, limit?: number, keyword?: string, sortBy?: SortOptions, filter?: FilterOptions) => {
    return await axiosClient.get(
      `/order/user/?page=${page}${limit ? `&limit=${limit}` : ''}${keyword ? `&keyword=${keyword}` : ''}${sortBy ? `&sortBy=${sortBy}` : ''}${filter ? `&filter=${filter}` : ''}`
    )
  },
  getOrder: async (id: string) => {
    return await axiosClient.get(`/order/?id=${id}`)
  },
  cancelOrder: async (id: string) => {
    return await axiosClient.patch(`/order/cancel/?id=${id}`)
  }
}
