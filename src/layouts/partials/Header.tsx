import { Link } from 'react-router-dom'

import type { MenuProps } from 'antd'
import { Input, Menu, Dropdown, Badge } from 'antd'

import { authApi } from '@/apis'

import { useApi } from '@/hooks'

import { useAuthStore, useCartStore } from '@/stores'

import { icons, NAVIGATION_ITEMS, PATH } from '@/utils'

import logo from '@/assets/images/logo.webp'

export function Header() {
  const { currentUser, setCurrentUser } = useAuthStore()
  const { productCount, setQuantity } = useCartStore()

  const { callApi: callApiLogout } = useApi<void>()

  const handleLogout = () => {
    callApiLogout(async () => {
      await authApi.logout()
      setCurrentUser(null)
      setQuantity(0)
    })
  }

  const actionsUser: MenuProps['items'] = [
    {
      key: 'profile',
      label: (
        <span className='text-base'>
          <Link to={PATH.profile} className='flex justify-between items-center hover:text-white'>
            <span className='text-xl mr-2'>{icons.register}</span>
            Tài khoản
          </Link>
        </span>
      )
    },
    {
      key: 'logout',
      label: (
        <button className='text-base' onClick={handleLogout}>
          <span className='flex justify-between items-center hover:text-white'>
            <span className='text-xl mr-2'>{icons.login}</span>
            Đăng xuất
          </span>
        </button>
      )
    }
  ]
  const actionsAuth: MenuProps['items'] = [
    {
      key: 'register',
      label: (
        <span className='text-base'>
          <Link to={PATH.register} className='flex justify-between items-center hover:text-white'>
            <span className='text-xl mr-2'>{icons.register}</span>
            Đăng ký
          </Link>
        </span>
      )
    },
    {
      key: 'login',
      label: (
        <span className='text-base'>
          <Link to={PATH.login} className='flex justify-between items-center hover:text-white'>
            <span className='text-xl mr-2'>{icons.login}</span>
            Đăng nhập
          </Link>
        </span>
      )
    }
  ]
  return (
    <div className='w-1200 mx-auto'>
      <header className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
          <img className='w-40 h-16' src={logo} alt='logo' />
        </div>

        <div className='flex-1 mr-4'>
          <div className='flex justify-between items-center border-b pb-2 mb-2'>
            <div className='flex items-center space-x-2'>
              <span className='text-xl'>{icons.phone}</span>
              <span className='text-base font-semibold uppercase'>
                Hotline:
                <a href='tel:1900 675' className='text-red-600'>
                  1900 6750
                </a>
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-xl'>{icons.location}</span>
              <Link to='/store-system' className='font-semibold hover:text-blue-600 uppercase'>
                Hệ thống cửa hàng
              </Link>
            </div>
            <div className='flex items-center'>
              <Input
                placeholder='Tìm sản phẩm'
                className='rounded-none'
                suffix={<span className='text-xl'>{icons.search}</span>}
              />
            </div>
          </div>

          <Menu mode='horizontal' className='flex justify-between uppercase' items={NAVIGATION_ITEMS} />
        </div>

        <div className='flex items-center text-base space-x-4'>
          <Dropdown
            menu={{ items: currentUser ? actionsUser : actionsAuth }}
            placement='bottomRight'
            trigger={['click']}
            arrow
          >
            <button className='flex flex-col justify-center items-center text-center border-none outline-none group'>
              <span className='p-3 rounded-full border border-gray-300'>{icons.user}</span>
              <span className='group-hover:text-dark-blue'>Tài khoản</span>
            </button>
          </Dropdown>

          <Link
            to={'/cart'}
            className='flex flex-col justify-center items-center relative text-center group'
          >
            <Badge count={productCount} showZero className='p-3 rounded-full border border-gray-300'>
              <span>{icons.shoppingBag}</span>
            </Badge>
            <span className='group-hover:text-dark-blue'>Giỏ hàng</span>
          </Link>
        </div>
      </header>
    </div>
  )
}
