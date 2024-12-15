import { instance as axiosClient } from '@/configs'

import { IOrder } from '@/interfaces'

export const checkoutApi = {
  createOrder: async (orderData: IOrder) => {
    return await axiosClient.post('/orders', orderData)
  }
}
