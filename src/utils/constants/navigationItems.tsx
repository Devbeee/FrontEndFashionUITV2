import { Link } from 'react-router-dom'
import { icons } from '../icons'
import { categoryApi } from '@/apis'
import { ICategory, INavigationItem } from '@/interfaces'
import { normalizeKey } from '../helpers'

const processCategories = async (): Promise<Record<string, string[]>> => {
  const { data } = await categoryApi.findAll()

  if (!data) return {}

  return data.reduce((acc: Record<string, string[]>, { gender, type }: Omit<ICategory, 'id'>) => {
    if (!acc[gender]) acc[gender] = []
    if (!acc[gender].includes(type)) acc[gender].push(type)
    return acc
  }, {})
}

const buildNavigationItems = (categories: Record<string, string[]>) => {
  return Object.entries(categories).map(([gender, types]) => ({
    label: <Link to={`/products?page=1&limit=12&categoryGender=${gender}`}>{gender}</Link>,
    key: `gender-${normalizeKey(gender)}`,
    children: types.map((type) => ({
      label: <Link to={`/products?page=1&limit=12&categoryGender=${gender}&categoryType=${type}`}>{type}</Link>,
      key: `type-${normalizeKey(gender)}-${normalizeKey(type)}`
    }))
  }))
}

const categories = await processCategories()

export const NAVIGATION_ITEMS: INavigationItem[] = [
  { label: <Link to='/'>Trang chủ</Link>, key: 'home' },
  ...buildNavigationItems(categories),
  { label: <Link to='/products'>Sản phẩm</Link>, key: 'products' },
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
