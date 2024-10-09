import { Product } from '@/components'
import { icons, SORT_OPTION, FILTER_TITLES } from '@/utils'
import React, { useState } from 'react'
import { Select } from 'antd'

interface ProductType {
  _id: number
  name: string
  price: number
  discount: number
  sold: number
  saleCount: number
  images: { imgUrl: string }[]
  slug: string
}

export const AllProducts: React.FC = () => {
  const [sideBarVisible, setSideBarVisible] = useState(window.innerWidth > 980 ? true : false)

  const [selectedFilter, setSelectedFilter] = useState<string[]>([])
  const [products, setProducts] = useState<ProductType[]>([
    {
      _id: 1,
      name: '123',
      price: 123,
      discount: 20,
      sold: 2,
      saleCount: 2,
      images: [{ imgUrl: '/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg' }],
      slug: '123'
    },
    {
      _id: 2,
      name: '123',
      price: 123,
      discount: 20,
      sold: 2,
      saleCount: 2,
      images: [{ imgUrl: '/src/assets/images/set-do-tap-nu-ao-ngan-tay-icado-ah1-va-quan-legging-icado-qd23-0.jpg' }],
      slug: '123'
    }
  ])
  const [keyword, setKeyWord] = useState('')

  return (
    <div className={'w-full flex justify-center mb-10 relative top-0'}>
      {sideBarVisible ? (
        <div
          onClick={(e) => setSideBarVisible(!sideBarVisible)}
          className={
            'transform translate-x-0 w-screen h-screen bg-opacity-70 z-10 fixed top-0 bg-black xl:hidden block'
          }
        ></div>
      ) : undefined}
      <div className={'mt-10 w-1200 flex gap-5'}>
        <div
          onClick={(e) => setSideBarVisible(!sideBarVisible)}
          className={
            'bg-text-dark-blue w-14 h-14 fixed top-56 flex justify-center items-center rounded-tr-xl rounded-br-xl z-10 transition-all duration-500 hover:cursor-pointer xl:hidden' +
            (sideBarVisible ? ' left-80' : ' left-0')
          }
        >
          {icons.filter.white}
        </div>

        <div
          className={
            ' h-[110vh] left-0 bg-white overflow-x-hidden transition-all duration-500 fixed top-[0] z-10 xl:w-1/4 xl:relative xl:h-auto' +
            (sideBarVisible ? ' w-80 xl:p-0 p-2 ' : ' w-0 p-0')
          }
        >
          <div className={'bg-off-white w-full h-auto p-2.5 px-5 rounded'}>
            <div className={'text-black font-extrabold text-lg mb-2 select-none'}>DANH MỤC SẢN PHẨM</div>
            <ul className={''}>
              {FILTER_TITLES.collectionLinks.map((item, index) => (
                <li className={'flex w-full justify-between h-8 items-center hover:cursor-pointer group'} key={index}>
                  <div className={'flex h-7 items-center'}>
                    <div className={'group-hover:h-5 group-hover:bg-text-dark-blue'}></div>
                    <p className={'m-0 pl-1.5 ml-2 user-select-none  group-hover:text-text-dark-blue'}>{item}</p>
                  </div>
                  {icons.filter.darkBlue}
                </li>
              ))}
            </ul>
          </div>
          <div className={'mt-5 border-2 border-[#eeeeee] w-full h-auto p-2.5 px-5 rounded'}>
            <div className={'w-full'}>
              <div className={'flex w-full justify-between mb-2.5'}>
                <div className={'text-text-dark-blue font-extrabold text-xl'}>Đã chọn</div>
                <div onClick={(e) => {}} className={'hover:cursor-pointer'}>
                  <div className={'text-red-500 user-select-none font-medium'}>Clear</div>
                </div>
              </div>
              <ul className={'flex flex-wrap gap-2.5'}>
                {selectedFilter.map((item, index) => (
                  <li
                    className={'bg-text-dark-blue w-auto h-auto flex justify-between items-center p-1 rounded-lg'}
                    key={index}
                  >
                    <div onClick={(e) => {}} className={'h-4 cursor-pointer'}>
                      {icons.x}
                    </div>
                    <div className={'text-white font-medium h-4 text-base mb-1 ml-0 user-select-none'}>{item}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'mb-3'}>
              <div className={'text-black font-extrabold text-lg my-4'}>CHỌN MỨC GIÁ</div>
              <ul className={'max-h-40 overflow-x-hidden'}>
                {FILTER_TITLES.priceFilter.map((item, index) => (
                  <li
                    onClick={(e) => {}}
                    className={'flex w-full justify-start h-8 items-center group hover:cursor-pointer'}
                    key={index}
                  >
                    <input
                      checked={selectedFilter.indexOf(item) !== -1 ? true : false}
                      className={'mr-2'}
                      type='checkbox'
                      onChange={() => {}}
                    ></input>
                    <p className={'ml-7.5 user-select-none group-hover:text-text-dark-blue'}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'mb-3'}>
              <div className={'text-black font-extrabold text-lg my-4'}>LOẠI SẢN PHẨM</div>
              <ul className={'max-h-40 overflow-x-hidden'}>
                {FILTER_TITLES.typeFilter.map((item, index) => (
                  <li
                    onClick={(e) => {}}
                    className={'flex w-full justify-start h-8 items-center group hover:cursor-pointer'}
                    key={index}
                  >
                    <input
                      checked={selectedFilter.indexOf(item) !== -1 ? true : false}
                      className={'mr-2'}
                      type='checkbox'
                      onChange={() => {}}
                    ></input>
                    <p className={'ml-7.5 user-select-none group-hover:text-text-dark-blue'}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'mb-3'}>
              <div className={'text-black font-extrabold text-lg my-4'}>MÀU SẮC</div>
              <ul className={'max-h-40 overflow-x-hidden'}>
                {FILTER_TITLES.colorFilter.map((item, index) => (
                  <li
                    onClick={(e) => {}}
                    className={'flex w-full justify-start h-8 items-center group hover:cursor-pointer'}
                    key={index}
                  >
                    <input
                      checked={selectedFilter.indexOf(item) !== -1 ? true : false}
                      className={'mr-2'}
                      type='checkbox'
                      onChange={() => {}}
                    ></input>
                    <p className={'ml-7.5 user-select-none group-hover:text-text-dark-blue'}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'mb-3'}>
              <div className={'text-black font-extrabold text-lg my-4'}>KIỂU VẢI</div>
              <ul className={'max-h-40 overflow-x-hidden'}>
                {FILTER_TITLES.fabricTypeFilter.map((item, index) => (
                  <li
                    onClick={(e) => {}}
                    className={'flex w-full justify-start h-8 items-center group hover:cursor-pointer'}
                    key={index}
                  >
                    <input
                      checked={selectedFilter.indexOf(item) !== -1 ? true : false}
                      className={'mr-2'}
                      type='checkbox'
                      onChange={() => {}}
                    ></input>
                    <p className={'ml-7.5 user-select-none group-hover:text-text-dark-blue'}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={'xl:w-3/4 w-full xl:mx-0 mx-2'}>
          <div
            className={
              'flex justify-between bg-[#f7f8f9] items-center h-13 p-2.5 border border-[#f1f1f1] rounded-sm mb-5'
            }
          >
            <div className={'text-xl font-extrabold pl-7.5 md:pl-0'}>
              {keyword ? `Kết quả tìm kiếm cho ${keyword}` : 'TẤT CẢ SẢN PHẨM'}
            </div>
            <div className={'flex items-center'}>
              <div className={''}>{icons.sortDecreasing}</div>
              <div className={'font-medium mx-2.5 ml-1 pb-1'}>Sắp xếp:</div>

              <Select
                onChange={() => {}}
                defaultValue={SORT_OPTION.default}
                style={{ width: 120 }}
                options={SORT_OPTION.option}
              ></Select>
            </div>
          </div>
          <div className={'w-full flex flex-wrap gap-[5%] md:gap-[2%] justify-start md:px-0 sm:px-2 px-1'}>
            {products.map((product: ProductType) => (
              <div className={'md:w-[23.5%] mt-2 w-[46%]'} key={product._id}>
                <Product
                  product={product}
                  discount={product?.discount ? true : false}
                  handleClickCart={() => {}}
                  handleClickEye={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
