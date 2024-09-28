import { Link } from 'react-router-dom'

import { Input, Button, Menu } from 'antd'

import { icons, NAVIGATION_ITEMS } from '@/utils'

import logo from '@/assets/images/logo.webp'

export function Header() {
  return (
    <div className='w-1200 mx-auto'>
      <header className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
          <img
            className='w-40 h-16'
            src={logo}
            alt='logo'
          />
        </div>

        <div className='flex-1 mr-4'>
          <div className='flex justify-between items-center border-b pb-2 mb-2'>
            <div className='flex items-center space-x-2'>
              <span className='text-xl'>{icons.phone}</span>
              <span className='text-base font-semibold'>
                Hotline:
                <a href='tel:1900 675' className='text-red-600'>
                  1900 6750
                </a>
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-xl'>{icons.location}</span>
              <Link to='/he-thong-cua-hang' className='font-semibold hover:text-blue-600'>
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

          <Menu mode='horizontal' className='flex justify-between' items={NAVIGATION_ITEMS} />
        </div>

        <div className='flex items-center space-x-4'>
          <div className='text-center'>
            <Button shape='circle' icon={<span>{icons.user}</span>} />
            <div>Tài khoản</div>
          </div>
          <div className='relative text-center'>
            <Button shape='circle' icon={<span>{icons.shoppingBag}</span>} />
            <div>Giỏ hàng</div>
            <span className='absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
              0
            </span>
          </div>
        </div>
      </header>
    </div>
  )
}
