import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Select, Checkbox, Pagination } from 'antd'

import { useApi, useBoolean } from '@/hooks'

import { IGetProductsParams, IProduct } from '@/interfaces'

import { Product } from '@/components'

import { icons, sortOptions, filterTiers, collectionLinks } from '@/utils'
import { productApi } from '@/apis/product.api'

type query = {
  sortStyle: string
  categoryGender: string
  price: string[]
  categoryType: string[]
  colorName: string[]
}

export const AllProducts: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sideBarVisible = useBoolean(window.innerWidth > 980)

  const [selectedFilter, setSelectedFilter] = useState<string[]>([])
  const [products, setProducts] = useState<IProduct[] | null>(null)
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const {value: initialRender, setFalse: setFalseInitial, setTrue: setTrueInitial} = useBoolean(true)
  const {value: isUpdate, setFalse: setFalseUpdate} = useBoolean(true)

  const handleChangePage = (page: number) => {
    updateSearchParams(page);
    setCurrentPage(page);
  };

  const [query, setQuery] = useState<query>({
    sortStyle: '',
    categoryGender: '',
    price: [],
    categoryType: [],
    colorName: []
  })
  const { loading, callApi: callApiGetProduct } = useApi<void>()

  const getProducts = async (page: number) => {
    const params: IGetProductsParams = {
      page,
      ...(query.sortStyle && { sortStyle: query.sortStyle }),
      ...(query.categoryGender && { categoryGender: query.categoryGender }),
      ...(query.price.length > 0 && { price: query.price.join(',') }),
      ...(query.categoryType.length > 0 && { categoryType: query.categoryType.join(',') }),
      ...(query.colorName.length > 0 && { colorName: query.colorName.join(',') })
    };
    callApiGetProduct(async () => {
      const {data} = await productApi.getProducts(params);
      if (data) {
        setProducts(data.data)
        setTotalProducts(data.total)
      } else {
        setProducts([]);
      }
    })
  }

  const handleClearFilter = () => {
    setSelectedFilter([])
    setCurrentPage(1)
    setQuery({
      sortStyle: '',
      categoryGender: '',
      price: [],
      categoryType: [],
      colorName: []
    })
  }

  const handleCheckFilter = (filterType: keyof query, option: string) => {
    setCurrentPage(1);
    if (filterType === 'sortStyle' || filterType === 'categoryGender') {
      setQuery({...query, [filterType]: option})
      return;
    }
    setQuery((prevQuery) => {
      const currentFilter = prevQuery[filterType];
      
      if (Array.isArray(currentFilter)) {
        const updatedFilter = 
          currentFilter.includes(option)
            ? currentFilter.filter((item) => item !== option)
            : [...currentFilter, option]; 
  
        return { ...prevQuery, [filterType]: updatedFilter };
      }
      
      return prevQuery;
    });
    setSelectedFilter((prev) =>
      prev.indexOf(option) === -1 ? [...prev, option] : prev.filter((item) => item !== option)
    );
  }

  const updateSearchParams = (page: number) => {
    setSearchParams({
      page: page.toString(),
      ...(query.sortStyle && { sortStyle: query.sortStyle }),
      ...(query.categoryGender && { categoryGender: query.categoryGender }),
      ...(query.price.length > 0 && { price: query.price.join(',') }),
      ...(query.categoryType.length > 0 && { categoryType: query.categoryType.join(',') }),
      ...(query.colorName.length > 0 && { colorName: query.colorName.join(',') })
    });
  };

  useEffect(() => {
    if (initialRender) {
      setFalseInitial();
  
      const urlPage = parseInt(searchParams.get('page') || '1');
      const urlSortStyle = searchParams.get('sortStyle') || '';
      const urlCategoryGender = searchParams.get('categoryGender') || '';
      const urlPrice = searchParams.get('price')?.split(',') || [];
      const urlCategoryType = searchParams.get('categoryType')?.split(',') || [];
      const urlColorName = searchParams.get('colorName')?.split(',') || [];
      setSelectedFilter([...urlPrice, ...urlCategoryType, ...urlColorName]);

      const updateQuery = {
        sortStyle: urlSortStyle,
        categoryGender: urlCategoryGender,
        price: urlPrice,
        categoryType: urlCategoryType,
        colorName: urlColorName,
      };
  
      setQuery(updateQuery);
      setCurrentPage(urlPage);
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (!isUpdate) {
      updateSearchParams(currentPage);
    } else {
      setFalseUpdate();
    }

    if (!initialRender) {
      setTrueInitial();
      getProducts(currentPage);
    }
  }, [query]);

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
                    onClick={() => handleCheckFilter('categoryGender', link)}
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
                  onClick={handleClearFilter}
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
                      key={option.value}
                    >
                      <Checkbox
                        id={`priceFilter-${option}`}
                        className={'mr-2'}
                        checked={selectedFilter.indexOf(option.value) !== -1 ? true : false}
                        onChange={() => handleCheckFilter(filterTier.typeFilter as keyof query, option.value)}
                      ></Checkbox>
                      <label
                        htmlFor={`priceFilter-${option}`}
                        className={'ml-7.5 user-select-none group-hover:text-dark-blue'}
                      >
                        {option.label}
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
              <div>{icons.sortDecreasing}</div>
              <div className={'font-medium mx-2.5 ml-1 pb-1'}>Sắp xếp:</div>
                <Select
                onChange={(value) => handleCheckFilter('sortStyle', value)}
                defaultValue={sortOptions.default}
                value={query.sortStyle || sortOptions.default}
                style={{ width: 120 }}
                options={sortOptions.option}
              ></Select>
            </div>
          </div>
          <div className={'w-full min-h-[900px] flex flex-wrap gap-[5%] md:gap-[2%] justify-start md:px-0 sm:px-2 px-1'}>
            {loading ? (
              <div className={'w-full flex justify-center items-center'}>
                <div className="flex flex-col items-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-primary"></div>
                  <div className="text-xl font-medium text-gray-500 mt-2">
                    Đang tải...
                  </div>
                </div>
              </div>
            ) : products && products.length === 0 ? (
              <div className={'w-full flex justify-center'}>
                <div className={'text-2xl font-semibold text-gray-400'}>Không có sản phẩm phù hợp</div>
              </div>
            ) : products?.map((product: IProduct) => (
              <div className={'md:w-[23.5%] mt-2 w-[46%]'} key={product.id}>
                <Product
                  product={product}
                  handleClickCart={() => handleClickCart()}
                  handleClickEye={() => handleClickEye()}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <Pagination
              disabled={totalProducts === 0}
              align="center"
              defaultCurrent={1}
              current={currentPage}
              total={totalProducts}
              pageSize={12}
              onChange={handleChangePage}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
