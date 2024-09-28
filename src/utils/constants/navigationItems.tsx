import { Link } from 'react-router-dom'

import { icons } from '../icons'

export const NAVIGATION_ITEMS = [
  { label: <Link to='/'>Trang chủ</Link>, key: 'home' },
  { label: <Link to='#'>Nữ</Link>, key: 'female' },
  { label: <Link to='#'>Nam</Link>, key: 'male' },
  { label: <Link to='#'>Trẻ em</Link>, key: 'children' },
  { label: <Link to='#'>Sản phẩm</Link>, key: 'products' },
  { label: <Link to='#'>Tin tức</Link>, key: 'news' },
  { label: <Link to='#'>Liên hệ</Link>, key: 'contact' },
  {
    label: (
      <Link to='#' className='text-red-500 flex items-center'>
        <span>{icons.gift}</span>
        Khuyến mãi
      </Link>
    ),
    key: 'promotion'
  }
]
