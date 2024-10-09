import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '@/utils'
import { Button, Card, Image, Skeleton } from 'antd'

interface ProductProps {
  product: {
    _id: number
    name: string
    price: number
    discount: number
    sold: number
    saleCount: number
    images: { imgUrl: string }[]
    slug: string
  }
  ranking?: number
  newPrice?: number
  productCount?: boolean
  productCountSale?: boolean
  discount?: boolean
  handleClickCart?: () => void
  handleClickEye?: () => void
}

export const Product: React.FC<ProductProps> = ({
  product = {
    name: '123',
    price: 123,
    discount: 20,
    sold: 2,
    saleCount: 2,
    images: [{ imgUrl: '/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg' }],
    slug: '123'
  },
  ranking,
  productCount,
  productCountSale,
  discount,
  handleClickCart,
  handleClickEye
}) => {
  return (
    <div className=''>
      {product ? (
        <div className='shadow-md rounded'>
          <div className='relative overflow-hidden group '>
            <div className='absolute w-full h-full bg-gray-300 opacity-0 z-0 top-0 right-0 ease-in-out duration-150 group-hover:opacity-70'></div>
            <div className='relative flex overflow-hidden w-full justify-content-center align-items-center h-auto pb-[130%]'>
              <img
                className='bg-transparent absolute w-auto rounded max-h-full top-0 bottom-0 m-auto ease-in-out duration-300 will-change-opacity'
                src={product?.images[0]?.imgUrl}
                alt={product?.name}
              />
            </div>
            {discount && (
              <span className='absolute top-2 right-2 bg-red-700 text-white px-2 py-1 w-10 h-5 box-content text-sm font-normal italic text-center'>
                -{product?.discount}%
              </span>
            )}
            {ranking && (
              <div className='absolute w-auto h-8 leading-8 box-content text-center left-2.5 top-2.5'>
                <span className='absolute opacity-0 border-2 rounded-full h-9 w-9 left-0 top-0 animate-pulsate border-blue-cyan'></span>
                <div className='text-white text-sm font-medium w-9 h-9 leading-9 bg-blue-cyan rounded-full inline-block'>
                  #{ranking}
                </div>
              </div>
            )}
            <div className='text-center h-full w-full absolute top-0 transition-opacity duration-300 ease-in-out opacity-0 bg-gray-400 group-hover:opacity-70'>
              <div className='w-full h-full bg-gray-300 opacity-0 absolute  top-0 left-0'></div>
              <div className='flex justify-center items-center absolute w-full top-1/2 left-1/2 text-center transition-all duration-300 ease-in-out transform -translate-x-1/2 -translate-y-1/2'>
                <Link to={`/product/detail/${product?.slug}`} className='text-lg font-semibold'>
                  <Button
                    className='!w-12 !h-12 text-xl cursor-pointer rounded-full p-2 hover:bg-white'
                    icon={icons.settings}
                  />
                </Link>
                <Button
                  className='!w-12 !h-12 text-xl cursor-pointer rounded-full p-2 hover:bg-white'
                  title='Preview'
                  onClick={handleClickEye}
                  icon={icons.eye}
                />
                <Button
                  className='!w-12 !h-12 text-xl cursor-pointer rounded-full p-2 hover:bg-white'
                  title='Add to Cart'
                  onClick={handleClickCart}
                  icon={icons.shoppingBag}
                />
              </div>
            </div>
          </div>
          <div className='relative my-1.5 px-2 pb-1'>
            <Link className='bg-gray-300 no-underline' to={`/product/detail/${product?.slug}`}>
              <div className='text-ellipsis text-left text-black no-underline text-sm font-semibold mb-0.5 pb-0.5 leading-5 capitalize h-11 overflow-hidden hover:text-blue-cyan'>
                {product?.name}
              </div>
            </Link>
            <div className='text-red-500 leading-5 block text-base font-medium min-h-6 text-left'>
              {discount ? (
                <>
                  <span className='pr-1 font-bold'>
                    {((product?.price - (product?.price * product?.discount) / 100) * 1000).toLocaleString('de-DE')}₫
                  </span>
                  <span className='line-through text-gray-500 leading-5 text-xs font-medium'>
                    {(product?.price * 1000).toLocaleString('de-DE')}₫
                  </span>
                </>
              ) : (
                <span className='pr-1 font-bold'>{(product?.price * 1000).toLocaleString('de-DE')}₫</span>
              )}
            </div>
            {productCount && (
              <div className='absolute bottom-2 right-2 w-24'>
                <div className='w-full h-4 rounded-full relative bg-cyan-600 mt-1'>
                  <span className='text-xs w-full top-0 absolute z-10 text-white leading-4 left-1/2 font-normal transform -translate-x-1/2'>
                    Đã bán {product?.sold}
                  </span>
                  <div className='absolute h-4 rounded-full bg-cyan-800 left-0 top-0 w-8/12'>
                    <span className='relative inline-block w-6 h-6 bg-contain bg-no-repeat bg-center left-full -top-3'></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {productCountSale && (
            <div className='mt-0 h-5 w-full relative block pb-1'>
              <div className='w-full h-4 rounded-full relative bg-orange-500  mt-1'>
                <span className='text-xs w-full absolute top-0  text-white leading-4 left-1/2 font-normal transform -translate-x-1/2'>
                  Đã bán {product?.sold}
                </span>
                <div className='absolute h-4 rounded-full bg-orange-800  left-0 top-0 w-10/12'>
                  <span className='relative inline-block w-6 h-6  bg-contain bg-no-repeat bg-center left-full top-[-10px]'></span>
                </div>
                <div className='absolute w-5 h-5 bg-no-repeat bg-fire bg-contain left-0.5 -top-1.5'></div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
