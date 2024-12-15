import { instance as axiosClient } from '@/configs'

export const orderApi = {
  getAllOrders: async () => {
    return await axiosClient.get('/orders/all')
  },
  getOrders: async (page: number, limit?: number, keyword?: string) => {
    return await axiosClient.get(
      `/orders/?page=${page}${limit ? `&limit=${limit}` : ''}${keyword ? `&keyword=${keyword}` : ''}`
    )
  }
}
