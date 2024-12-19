import { IAddressReturn } from '@/interfaces/address.interface'
import { OrderStatus, PaymentMethod, PaymentStatus } from '@/utils'

export interface IOrder {
  products: {
    productDetailId: string
    quantity: number
  }[]
  totalPrice: number
  address: IAddressReturn
  paymentMethod: PaymentMethod
  message: string
}
export interface IOrderProduct {
  color: string
  colorName: string
  discount: number
  id: string
  imgUrl: string
  name: string
  price: number
  quantity: number
  size: string
  slug: string
}
export interface IOrderReturn {
  address: IAddressReturn
  id: string
  message: string
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  products: IOrderProduct[]
  createdAt: string
  paidAt: string
  totalPrice: number
}
