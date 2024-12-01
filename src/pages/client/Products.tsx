import React, { useEffect, useState } from 'react'

import { Select, Checkbox } from 'antd'

import { useApi, useBoolean } from '@/hooks'

import { IGetProductsResponse, IProduct } from '@/interfaces'

import { Product } from '@/components'

import { icons, sortOptions, filterTiers, collectionLinks } from '@/utils'
import { productApi } from '@/apis/product.api'

export const AllProducts: React.FC = () => {
  const sideBarVisible = useBoolean(window.innerWidth > 980)

  const [selectedFilter, setSelectedFilter] = useState<string[]>([])
  const [products, setProducts] = useState<IProduct[]>([])
  const mappingProducts = (productsResponse: IGetProductsResponse[]) => {
    const products = productsResponse.map((product) => {
      const images = product.productDetails.map((productDetail) => {
        return {
          imgUrl: productDetail.imgUrl
        }
      })
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        images: images,
        slug: product.slug,
        category: {
          gender: product.category?.gender || '',
          type: product.category?.type || ''
        },
        description: product.description
      }
    })
    return setProducts(products)
  }
  const [totalProducts, setTotalProducts] = useState(0)
  const [limit] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / limit)) {
      getProducts(currentPage+1, limit)
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      getProducts(currentPage-1, limit)
      setCurrentPage(currentPage - 1)
    }
  }

  const [sortStyle, setSortStyle] = useState('')
  const [categoryGender, setCategoryGender] = useState('')
  const [price, setPrice] = useState<string[]>([])
  const [categoryType, setCategoryType] = useState<string[]>([])
  const [colorName, setColorName] = useState<string[]>([])
  const { callApi: callApiGetProduct } = useApi<void>()

  const getProducts = async (page: number, limit: number) => {
    const params = {
      page,
      limit,
      sortStyle,
      categoryGender,
      price: price.join(','),
      categoryType: categoryType.join(','),
      colorName: colorName.join(',')
    }
    callApiGetProduct(async () => {
      const {data} = await productApi.getProducts(params);
      if (data) {
        mappingProducts(data.data);
        setTotalProducts(data.total)
      } else {
        mappingProducts([]);
      }
    })
  }

  useEffect(() => {
    getProducts(1, limit)
    setCurrentPage(1)
  },[selectedFilter, price, categoryType, colorName, sortStyle, categoryGender])

  const handleClickCart = () => {}
  const handleClickEye = () => {}

  return (
    <div className={'w-full flex justify-center mb-10 relative top-0'}>
      {sideBarVisible.value ? (
        <div
          onClick={() => sideBarVisible.toggle()}
          className={
            'transform translate-x-0 w-screen h-screen bg-opacity-70 z-10 fixed top-0 bg-black xl:hidden block'
          }
        ></div>
      ) : undefined}
      <div className={'mt-10 w-1200 flex gap-5'}>
        <div
          onClick={() => sideBarVisible.toggle()}
          className={
            'bg-text-dark-blue w-14 h-14 fixed top-56 flex justify-center items-center rounded-tr-xl rounded-br-xl z-10 transition-all duration-500 hover:cursor-pointer xl:hidden' +
            (sideBarVisible.value ? ' left-80' : ' left-0')
          }
        >
          {icons.filter.white}
        </div>

        <div
          className={
            ' h-screen top-0 left-0 bg-white overflow-x-hidden transition-all duration-500 fixed z-10 xl:w-1/4 xl:relative xl:h-auto' +
            (sideBarVisible.value ? ' w-80 xl:p-0 p-2 ' : ' w-0 p-0')
          }
        >
          <div className={'bg-off-white border border-gray-300 w-full h-auto p-2.5 px-5 rounded'}>
            <div className={'text-black font-extrabold text-lg mb-2 select-none'}>DANH MỤC SẢN PHẨM</div>
            <ul>
              {collectionLinks.map((link, index) => (
                <li className={'flex w-full justify-between h-8 items-center hover:cursor-pointer group'} key={index}>
                  <div className={'flex h-7 items-center'}>
                    <div className={'group-hover:h-5 group-hover:bg-dark-blue'}></div>
                    <div 
                    className={'m-0 pl-1.5 ml-2 user-select-none  group-hover:text-dark-blue'}
                    onClick={() => setCategoryGender(link)}
                    >{link}</div>
                  </div>
                  {icons.filter.darkBlue}
                </li>
              ))}
            </ul>
          </div>
          <div className={'mt-5 border  border-gray-300 w-full h-auto p-2.5 px-5 rounded'}>
            <div className={'w-full'}>
              <div className={'flex w-full justify-between mb-2.5'}>
                <div className={'text-dark-blue font-extrabold text-xl'}>Đã chọn</div>
                <div className={'hover:cursor-pointer'}>
                  <div 
                  className={'text-red-500 user-select-none font-medium'}
                  onClick={() => {
                    setSelectedFilter([])
                    setPrice([])
                    setCategoryType([])
                    setColorName([])
                  }}
                  >Clear</div>
                </div>
              </div>
            </div>
            {filterTiers.map((filterTier) => (
              <div className={'mb-3'} key={filterTier.title}>
                <div className={'text-black font-extrabold text-lg my-4'}>{filterTier.title}</div>
                <ul className={'max-h-40 overflow-x-hidden'}>
                  {filterTier.options.map((option) => (
                    <li
                      className={'flex w-full justify-start h-8 items-center group hover:cursor-pointer'}
                      key={option}
                    >
                      <Checkbox
                        id={`priceFilter-${option}`}
                        className={'mr-2'}
                        checked={selectedFilter.indexOf(option) !== -1 ? true : false}
                        onChange={() => {
                          if (selectedFilter.indexOf(option) === -1) {
                            setSelectedFilter([...selectedFilter, option])
                          } else {
                            setSelectedFilter(selectedFilter.filter((item) => item !== option))
                          }
                          if(filterTier.typeFilter === 'price') {
                            if(price.indexOf(option) === -1) {
                              setPrice([...price, option])
                            } else {
                              setPrice(price.filter((item) => item !== option))
                            }
                          }
                          if(filterTier.typeFilter === 'category') {
                            if (categoryType.indexOf(option) === -1) {
                              setCategoryType([...categoryType, option])
                            } else {
                              setCategoryType(categoryType.filter((item) => item !== option))
                            }
                          }
                          if(filterTier.typeFilter === 'color') {
                            if (colorName.indexOf(option) === -1) {
                              setColorName([...colorName, option])
                            } else {
                              setColorName(colorName.filter((item) => item !== option))
                            }
                          }
                        }}
                      ></Checkbox>
                      <label
                        htmlFor={`priceFilter-${option}`}
                        className={'ml-7.5 user-select-none group-hover:text-dark-blue'}
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={'xl:w-3/4 w-full xl:mx-0 mx-2'}>
          <div
            className={
              'flex justify-between bg-off-white items-center h-13 p-2.5 border border-gray-300 rounded-sm mb-5'
            }
          >
            <div className={'text-xl font-extrabold pl-7.5 md:pl-0'}>
              TẤT CẢ SẢN PHẨM
            </div>
            <div className={'flex items-center'}>
              <div className={''}>{icons.sortDecreasing}</div>
              <div className={'font-medium mx-2.5 ml-1 pb-1'}>Sắp xếp:</div>
                <Select
                onChange={(value) => setSortStyle(value)}
                defaultValue={sortOptions.default}
                style={{ width: 120 }}
                options={sortOptions.option}
              ></Select>
            </div>
          </div>
          <div className={'w-full flex flex-wrap gap-[5%] md:gap-[2%] justify-start md:px-0 sm:px-2 px-1'}>
            {products.length === 0 ? (
              <div className={'w-full flex justify-center'}>
                <div className={'text-2xl font-semibold text-gray-400'}>Không có sản phẩm phù hợp</div>
              </div>
            ) : products.map((product: IProduct) => (
              <div className={'md:w-[23.5%] mt-2 w-[46%]'} key={product.id}>
                <Product
                  product={product}
                  handleClickCart={() => handleClickCart()}
                  handleClickEye={() => handleClickEye()}
                />
              </div>
            ))}
          </div>
          <div>
            <div className={'flex justify-center mt-5'}>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={'px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50'}
              >
                Trang Trước
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(totalProducts / limit)}
                className={'px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50'}
              >
                Trang Tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
