import React from 'react'

import { Col, ConfigProvider, Image, Modal, Row, Table, TableColumnsType } from 'antd'

import { IOrderProduct, IOrderReturn, IUseBoolean } from '@/interfaces'
import { useWindowSize } from '@/hooks'
import { getOrderStatusByEnum, icons, OrderStatus, PaymentMethod, PaymentStatus } from '@/utils'

type OrderDetailModalProps = {
  modalControl: IUseBoolean
  defaultData: IOrderReturn
}

export const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ modalControl, defaultData }) => {
  const windowSize = useWindowSize()
  const columns: TableColumnsType<IOrderProduct> = [
    {
      title: <h2 className='uppercase font-bold text-center min-w-[200px]'>Thông tin sản phẩm</h2>,
      className: '!px-2',
      key: 'informations',
      dataIndex: 'informations',
      width: 200,
      render: (_, record) => (
        <>
          <Row gutter={8}>
            <Col span={7}>
              <Image src={record.imgUrl} alt={record.name} />
            </Col>
            <Col span={17} className='pl-4 flex flex-col justify-between'>
              <div>
                <h6 className='text-sm font-medium line-clamp-2 text-ellipsis'>{record.name}</h6>
                <div className='text-xs capitalize'>
                  {record.color} / {record.size}
                </div>
              </div>
              <div className='text-red-600 font-bold pb-2'>
                {(record.price * (1 - record.discount / 100)).toLocaleString('de-DE')}đ
              </div>
            </Col>
          </Row>
        </>
      )
    },
    {
      title: <h2 className='uppercase font-bold text-center'>Số lượng</h2>,
      className: '!px-2',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      render: (_, record) => <div className='relative flex items-center justify-center  w-full '>{record.quantity}</div>
    },
    {
      title: <h2 className='uppercase font-bold text-center'>Thành tiền</h2>,
      className: '!px-2',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: 160,
      render: (_, record) => (
        <div className='text-red-600 font-bold text-center w-full'>
          {(record.price * (1 - record.discount / 100) * record.quantity).toLocaleString('de-DE')}đ
        </div>
      )
    }
  ]
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            singleItemHeightLG: 48,
            optionSelectedFontWeight: 600
          }
        }
      }}
    >
      <Modal
        title={[
          <div key={'modal-title'} className='text-xl'>
            Order ID: <span className='text-dark-blue underline'>{defaultData?.id}</span>
          </div>
        ]}
        open={modalControl.value}
        onClose={() => modalControl.setFalse()}
        onCancel={() => modalControl.setFalse()}
        width={800}
        footer={[]}
      >
        <div className=' rounded p-3 border border-dashed border-blue-cyan items-center flex flex-col gap-2 bg-slate-100'>
          <div className='flex flex-col w-full gap-2'>
            <div className='uppercase font-bold text-xl text-dark-blue py-[1px] justify-self-center text-center'>
              Thông tin thanh toán
            </div>
            <div className={`flex md:gap-14 gap-2 ${windowSize.width < 720 && 'flex-col'}`}>
              <div className=' w-full'>
                <div className='flex items-center justify-between w-full'>
                  <div className='font-semibold flex gap-2'>
                    <span className='text-red-600 text-2xl'>{icons.filledLocation}</span>
                    <span className='text-lg text-red-800'>Địa chỉ nhận hàng:</span>
                  </div>
                </div>
                {defaultData?.address && (
                  <div>
                    <div className='font-semibold text-base'>
                      <span>{defaultData?.address?.name} </span>
                      <span>({defaultData?.address?.phoneNumber})</span>
                    </div>
                    <div className=' text-slate-700'>
                      {`${defaultData?.address?.addressDetail}, ${defaultData?.address?.ward}, ${defaultData?.address?.district}, ${defaultData?.address?.province}`}
                    </div>
                  </div>
                )}
              </div>
              <div className='w-0 border-dashed border-r-[1px] border-gray-400'></div>
              <div className='w-full'>
                <div className='flex items-center  justify-between w-full'>
                  <div className='font-semibold  flex gap-2 '>
                    {windowSize.width > 720 && <span className='text-blue-600 text-2xl'>{icons.delivery}</span>}
                    <span className='text-lg text-blue-600'>Phương thức vận chuyển:</span>
                  </div>
                </div>
                <div className='flex justify-between w-full'>
                  <div>
                    <div className='font-bold text-base'>
                      <span>Tiêu chuẩn</span>
                    </div>
                    <div className=' text-slate-700'>Đảm bảo nhận hàng sau 3-5 ngày</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1 w-full'>
              <div
                className={`flex items-center md:gap-4 gap-0 w-full ${windowSize.width < 720 && 'flex-col !items-start'}`}
              >
                <div className='font-semibold  flex '>
                  <span className='text-lg '>Phương thức thanh toán:</span>
                </div>
                <div className={`text-slate-700 font-semibold`}>
                  <div className='flex items-center gap-2'>
                    <span className='text-xl text-lime-600 '>
                      {defaultData?.paymentMethod == PaymentMethod.COD ? icons.cash : icons.bank}
                    </span>
                    <span className='text-base text-lime-600'>
                      {defaultData?.paymentMethod == PaymentMethod.COD
                        ? 'Thanh toán khi nhận hàng'
                        : 'Thanh toán trực tuyến'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-end gap-2'>
              <div className='font-bold text-base'>
                {windowSize.width > 640 ? 'Trạng thái thanh toán:' : 'Thanh toán:'}
              </div>
              <div
                className={`font-bold text-base ${defaultData?.paymentStatus === PaymentStatus.Paid ? 'text-green-500' : 'text-red-500'}`}
              >
                {defaultData?.paymentStatus === PaymentStatus.Paid ? 'Đã thanh toán' : 'Chưa thanh toán'}
              </div>
            </div>
            <div className='flex items-end gap-2'>
              <div className='font-bold text-base'>
                {' '}
                {windowSize.width > 640 ? 'Tình trạng đơn hàng:' : 'Tình trạng:'}{' '}
              </div>
              <div
                className={`font-bold text-base ${defaultData?.orderStatus === OrderStatus.Delivered ? 'text-green-500' : defaultData?.orderStatus === OrderStatus.Pending ? 'text-slate-500' : 'text-red-500'}`}
              >
                {getOrderStatusByEnum(defaultData?.orderStatus)}
              </div>
            </div>
            <div className='justify-start items-start flex flex-col gap-2'>
              <div className='text-lg font-bold'>Lời nhắn:</div>
              <div className='border-[1px] border-gray-300 border-solid h-20 overflow-y-scroll w-full bg-gray-100 px-2 py-1'>
                {defaultData?.message}
              </div>
            </div>
          </div>
          <div className='w-full border-[1px] border-gray-400 border-solid'>
            <Table<IOrderProduct>
              columns={columns}
              dataSource={defaultData?.products}
              rowKey={(record) => record.id}
              scroll={
                columns?.length > 0
                  ? {
                      y: defaultData?.products && defaultData?.products?.length > 2 ? 120 * 2 : undefined,
                      x: 'fit-content'
                    }
                  : undefined
              }
              pagination={false}
              className='w-full'
            />
          </div>
          <div className='flex flex-col-reverse xl:flex-row items-end w-full xs:mb-2'>
            <div className='font-bold w-full text-base text-left flex justify-end gap-4 '>
              <span>Tổng tiền: </span>
              <span className='text-red-500'>
                {defaultData?.products.length ? defaultData?.totalPrice.toLocaleString('de-DE') : 0}đ
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  )
}
