import { PATH } from './path'

export const menuSidebar = [
  {
    key: 'profile',
    title: 'Thông tin tài khoản',
    linkTo: PATH.profile
  },
  {
    key: 'orders',
    title: 'Đơn hàng của bạn',
    linkTo: '/orders'
  },
  {
    key: 'changePassword',
    title: 'Đổi mật khẩu',
    linkTo: PATH.changePassword
  },
  {
    key: 'addresses',
    title: 'Sổ địa chỉ',
    linkTo: '/addresses'
  }
]
