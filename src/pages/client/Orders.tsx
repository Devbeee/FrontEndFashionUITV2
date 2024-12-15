import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  Col,
  Image,
  Input,
  message,
  Pagination,
  PaginationProps,
  Row,
  Select,
  Spin,
  Table,
  TableColumnsType,
  Tooltip
} from 'antd'

import { orderApi } from '@/apis'
import { OrderDetailModal } from '@/components'
import { useApi, useBoolean, useWindowSize } from '@/hooks'
import { IOrderReturn } from '@/interfaces'
import { ConvertDateString, getOrderStatusByEnum, icons, OrderStatus, SortOptions } from '@/utils'

type PaginationType = {
  totalPages?: number
  totalOrders?: number
  currentPage?: number
  limit?: number
}

export const Orders = () => {
  const location = useLocation()
  const viewOrderModalControl = useBoolean()
  const navigate = useNavigate()
  const windowSize = useWindowSize()

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const queryParamPage = parseInt(queryParams.get('page') || '1')
  const queryParamLimit = parseInt(queryParams.get('limit') || '4')
  const queryParamSortBy = SortOptions[queryParams.get('sortBy') as keyof typeof SortOptions]
  const { loading: callOrderApiLoading, callApi: callOrdertApi } = useApi<void>()

  const [orders, setOrders] = useState<IOrderReturn[]>([])
  const [selectedOrder, setSelectedOrder] = useState<IOrderReturn>()
  const [pagination, setPagination] = useState<PaginationType>({})
  const [inputKeyword, setInputKeyword] = useState<string>(queryParams.get('keyword') ?? '')
  const [currentKeyword, setCurrentKeyword] = useState<string>(queryParams.get('keyword') ?? '')
  const [currentSortBy, setCurrentSortBy] = useState<SortOptions>(queryParamSortBy || SortOptions.None)

  const hanldeSelectOrder = (order: IOrderReturn) => {
    setSelectedOrder(order)
    viewOrderModalControl.setTrue()
  }
  const getSortOptionElm = (title: string, icon?: JSX.Element) => {
    return (
      <span className='flex items-center gap-1'>
        <span>{title}:</span>
        <span>{icon}</span>
      </span>
    )
  }
  const sortOptions = [
    {
      value: SortOptions.DateDecrease,
      label: getSortOptionElm('Date', icons.downArrow)
    },
    {
      value: SortOptions.DateIncrease,
      label: getSortOptionElm('Date', icons.upArrow)
    },
    {
      value: SortOptions.PriceDecrease,
      label: getSortOptionElm('Price', icons.downArrow)
    },
    {
      value: SortOptions.PriceIncrease,
      label: getSortOptionElm('Price', icons.upArrow)
    },
    {
      value: SortOptions.None,
      label: getSortOptionElm('None')
    }
  ]
  const columns = useMemo<TableColumnsType<IOrderReturn>>(
    () =>
      !callOrderApiLoading
        ? [
            {
              title: <h2 className='uppercase font-bold text-center  w-[130px]'>ID</h2>,
              key: 'informations',
              dataIndex: 'informations',
              width: 100,
              render: (_, record) => (
                <Row gutter={8} className='w-full flex flex-col justify-between'>
                  <Col span={24} className='pl-4'>
                    <Tooltip
                      className='!w-full'
                      placement='bottomLeft'
                      title={record.id}
                      color='white'
                      overlayStyle={{
                        maxWidth: '100%'
                      }}
                      overlayInnerStyle={{
                        color: 'black',
                        textWrap: 'nowrap'
                      }}
                      arrow={{
                        pointAtCenter: true
                      }}
                    >
                      <h6
                        onClick={() => {
                          hanldeSelectOrder(record)
                        }}
                        className='hover:cursor-pointer hover:underline hover:text-primary text-sm font-medium line-clamp-1 text-ellipsis'
                      >
                        {record.id}
                      </h6>
                    </Tooltip>
                  </Col>
                </Row>
              )
            },
            {
              title: <h2 className='uppercase font-bold text-center min-w-[250px]'>Sản phẩm</h2>,
              key: 'informations',
              dataIndex: 'informations',
              width: orders.length > 4 ? 160 : 200,
              render: (_, record) => (
                <Row gutter={8} className='w-full flex justify-center'>
                  <Col span={orders.length > 4 ? 6 : 6}>
                    <Image src={record.products[0]?.imgUrl} alt={record.products[0]?.name} />
                  </Col>
                  <Col span={orders.length > 4 ? 18 : 18} className='pl-4 flex flex-col justify-between'>
                    <div>
                      <h6 className='text-sm font-medium line-clamp-1 text-ellipsis'>{record.products[0]?.name}</h6>
                      <div className='text-xs capitalize'>
                        {record.products[0]?.color} / {record.products[0]?.size}
                      </div>
                    </div>
                    <div className='text-red-600 font-bold pb-2'>
                      {(record.products[0]?.price * (1 - record.products[0]?.discount / 100)).toLocaleString('de-DE')}đ
                    </div>
                  </Col>
                </Row>
              )
            },
            {
              title: <h2 className='uppercase font-bold text-center  w-[80px]'>Số sản phẩm</h2>,
              key: 'informations',
              dataIndex: 'informations',
              width: 60,
              render: (_, record) => (
                <Row gutter={8} className='w-full flex justify-center'>
                  <Col span={24} className='text-sm font-medium line-clamp-2 text-center'>
                    {record.products.reduce((total, product) => total + product.quantity, 0)}
                  </Col>
                </Row>
              )
            },
            {
              title: <h2 className='uppercase font-bold text-center w-[80px]'>Tổng tiền</h2>,
              dataIndex: 'quantity',
              key: 'quantity',
              width: 60,
              render: (_, record) => (
                <div className='relative flex items-center justify-center text-red-600 font-bold'>
                  {record.totalPrice.toLocaleString('de-DE')}đ
                </div>
              )
            },
            {
              title: <h2 className='uppercase font-bold text-center w-[60px]'>Tình trạng</h2>,
              dataIndex: 'totalPrice',
              key: 'totalPrice',
              width: 40,
              render: (_, record) => (
                <div
                  className={` text-center font-semibold ${record?.orderStatus === OrderStatus.Delivered ? 'text-green-500' : record?.orderStatus === OrderStatus.Pending ? 'text-slate-500' : 'text-red-500'}`}
                >
                  {getOrderStatusByEnum(record?.orderStatus)}
                </div>
              )
            },
            {
              title: <h2 className='uppercase font-bold text-center w-[80px]'>Ngày đặt hàng</h2>,
              dataIndex: 'totalPrice',
              key: 'totalPrice',
              width: 80,
              render: (_, record) => <div className='text-center'>{ConvertDateString(record.createdAt)}</div>
            }
          ]
        : [
            {
              title: <h2 className='uppercase font-bold text-center flex justify-center'>Đơn hàng</h2>,
              key: 'informations',
              dataIndex: 'informations',
              width: 600,
              render: () => (
                <div className='w-full flex items-center justify-center'>
                  <Spin />
                </div>
              )
            }
          ],
    [callOrderApiLoading]
  )

  const fetchOrders = (page: number = 1, limit: number = 4, keyword?: string, sortBy?: SortOptions) => {
    callOrdertApi(async () => {
      const data = await orderApi.getOrders(page, limit, keyword, sortBy)
      if (data) {
        setOrders(data?.data?.orders || [])
        setPagination(data?.data?.pagination || {})
      } else {
        message.error('Đã xảy ra lỗi khi lấy thông tin đơn hàng!')
      }
    })
  }
  const fetchAndNavigate = (page: number = 1, limit: number = 4, keyword?: string, sortBy?: SortOptions) => {
    const param = {
      sortBy: sortBy !== SortOptions.None ? `&sortBy=${sortBy}` : '',
      limit: pagination.limit ? `&limit=${limit}` : ''
    }
    if (keyword) {
      const paramKeyword = `&keyword=${keyword}`
      navigate(`?page=${page}${param.limit}${paramKeyword}${param.sortBy}`)
      fetchOrders(page, limit, keyword, sortBy)
    } else {
      navigate(`?page=${page}${param.limit}${param.sortBy}`)
      fetchOrders(page, limit, undefined, sortBy)
    }
  }
  useEffect(() => {
    if (currentKeyword) {
      setPagination({ ...pagination, currentPage: queryParamPage, limit: queryParamLimit })
      fetchOrders(queryParamPage, queryParamLimit, currentKeyword, currentSortBy)
    } else {
      setPagination({ ...pagination, currentPage: queryParamPage, limit: queryParamLimit })
      fetchOrders(queryParamPage, queryParamLimit, undefined, currentSortBy)
    }
  }, [])

  const onChangePage: PaginationProps['onChange'] = (page, size) => {
    if (currentKeyword === inputKeyword) {
      fetchAndNavigate(page, size, currentKeyword, currentSortBy)
    } else {
      setInputKeyword(currentKeyword)
      fetchAndNavigate(page, size, currentKeyword, currentSortBy)
    }
  }
  const handleSearchOrder = () => {
    if (inputKeyword !== currentKeyword) {
      if (inputKeyword !== '') {
        setCurrentKeyword(inputKeyword)
        fetchAndNavigate(1, pagination.limit, inputKeyword, currentSortBy)
      } else {
        setCurrentKeyword('')
        fetchAndNavigate(1, pagination.limit, undefined, currentSortBy)
      }
    }
  }
  const handleChangeSortOption = (value: SortOptions) => {
    setCurrentSortBy(value)
    fetchAndNavigate(queryParamPage, queryParamLimit, currentKeyword, value)
  }
  return (
    <section className='px-2 xs:px-4'>
      <div className={`flex justify-start pb-4 ${windowSize.width < 720 && 'flex-col'}`}>
        <div className='text-2xl font-bold xs:text-2xl text-dark-blue flex-[5] text-left'>
          {windowSize.width > 640 ? 'Danh sách đơn hàng' : 'Đơn hàng'}
        </div>
        <div className='flex-[3] flex items-center gap-2'>
          <Input
            value={inputKeyword}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchOrder()
              }
            }}
            onChange={(e) => setInputKeyword(e.target.value)}
            placeholder='ID đơn hàng, tên sản phẩm...'
            className='rounded-md py-2 border-gray-500 hover:!border-dark-blue focus-within:!border-dark-blue focus:!border-dark-blue !drop-shadow-sm '
            suffix={
              <span onClick={handleSearchOrder} className='text-lg hover:cursor-pointer hover:text-dark-blue m-1'>
                {icons.search}
              </span>
            }
          />
        </div>
      </div>
      <div className='w-full gap-2 items-center flex justify-end mb-2'>
        <div className='gap-2 items-center flex'>
          <span className='font-semibold text-lg'>Sort by: </span>
          <Select
            className='w-24'
            options={sortOptions}
            value={currentSortBy}
            onChange={(e) => handleChangeSortOption(e)}
          />
        </div>
      </div>
      {orders?.length > 0 ? (
        <div className='w-full border-[1px] border-gray-200 border-solid rounded-md'>
          <Table<IOrderReturn>
            columns={columns}
            dataSource={orders}
            rowKey={(record) => record.id}
            scroll={{ y: orders.length > 4 ? 480 : undefined, x: 'fit-content' }}
            pagination={false}
            className=''
          />
        </div>
      ) : (
        !callOrderApiLoading && <div className='text-xl mt-10 text-red-500'>Bạn chưa có đơn hàng nào</div>
      )}

      {pagination && orders.length > 0 && (
        <div className='w-full flex justify-end py-3'>
          <Pagination
            defaultCurrent={pagination?.currentPage || 1}
            current={pagination?.currentPage || 1}
            onChange={onChangePage}
            total={pagination?.totalOrders}
            defaultPageSize={4}
            pageSize={pagination?.limit}
            pageSizeOptions={[4, 8, 10, 20]}
            showSizeChanger={true}
          />
        </div>
      )}
      {selectedOrder && <OrderDetailModal defaultData={selectedOrder} modalControl={viewOrderModalControl} />}
    </section>
  )
}
