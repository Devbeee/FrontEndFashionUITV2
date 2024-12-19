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

export const sortByEnumMapping = (value?: string) => {
  const stringToEnumMapping: Record<string, SortOptions> = {
    'date-decrease': SortOptions.DateDecrease,
    'date-increase': SortOptions.DateIncrease,
    'price-decrease': SortOptions.PriceDecrease,
    'price-increase': SortOptions.PriceIncrease
  }
  return value ? stringToEnumMapping[value] : SortOptions.DateDecrease
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
