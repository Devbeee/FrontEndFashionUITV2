import { OrderStatus } from '@/utils/common'

export const getOrderStatusByEnum = (orderEnum: OrderStatus) => {
  return orderEnum === OrderStatus.Delivered
    ? 'Giao hàng thành công'
    : orderEnum === OrderStatus.Delivering
      ? 'Đang giao hàng'
      : orderEnum === OrderStatus.Confirmed
        ? 'Đã xác nhận'
        : orderEnum === OrderStatus.Pending
          ? 'Đang xử lí'
          : 'Đã hủy'
}
