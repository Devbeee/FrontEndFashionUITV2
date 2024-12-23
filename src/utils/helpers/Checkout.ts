import { FilterOptions, OrderStatus, SortOptions } from '@/utils/common'

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

export const filterEnumMapping = (value?: string) => {
  const stringToEnumMapping: Record<string, FilterOptions> = {
    delivering: FilterOptions.Delivering,
    delivered: FilterOptions.Delivered,
    confirmed: FilterOptions.Confirmed,
    pending: FilterOptions.Pending,
    canceled: FilterOptions.Canceled,
    none: FilterOptions.None
  }
  return value ? stringToEnumMapping[value] : FilterOptions.None
}
