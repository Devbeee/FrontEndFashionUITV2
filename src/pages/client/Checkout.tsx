import { addressApi, userApi } from '@/apis'
import { AddressModal, CustomBtn, CustomInput, SelectAddressModal } from '@/components'
import { useApi, useBoolean, useWindowSize } from '@/hooks'
import { IAddress, IAddressReturn, ICartProduct } from '@/interfaces'
import { useProvincesStore } from '@/stores'
import { getProvinces, icons } from '@/utils'
import { Col, Row, Table, TableColumnsType, Image, message, Radio, Input, Button, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type CheckoutState = {
  checkoutItems: ICartProduct[]
  totalPrice: number
}
type PaymentMethods = 'cod' | 'banking'
export function Checkout() {
  const [checkoutObj, setCheckoutObj] = useState<CheckoutState>()
  const [selectedAddress, setSelectedAddress] = useState<IAddressReturn>()
  const [addressesList, setAddressesList] = useState<IAddressReturn[]>()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('cod')

  const addModalControl = useBoolean(false)
  const selectModalControl = useBoolean(false)

  const { setCurrentProvinces, currentProvinces } = useProvincesStore()
  const location = useLocation()

  const { loading: addressLoading, callApi: callApiAddAddress } = useApi<void>()
  const windowSize = useWindowSize()

  const fetchDefaultAddress = () => {
    callApiAddAddress(async () => {
      const data = await userApi.getDefaultAddress()
      if (data) {
        setSelectedAddress(data.data)
      } else {
        message.error('Đã xãy ra lỗi khi lấy địa chỉ mặc định!')
      }
    })
  }

  const fetchAddresses = async () => {
    callApiAddAddress(async () => {
      const data = await addressApi.getAddresses()
      if (data) {
        setAddressesList(data.data)
      } else {
        message.error('Đã xãy ra lỗi khi lấy danh sách địa chỉ!')
      }
    })
  }

  const fetchProvinces = async () => {
    const provincesList = await getProvinces()
    setCurrentProvinces(provincesList)
  }

  useEffect(() => {
    fetchAddresses()
    fetchDefaultAddress()
    if (currentProvinces.length <= 0) fetchProvinces()
    setCheckoutObj({ checkoutItems: location?.state?.checkoutItems, totalPrice: location?.state?.totalPrice })
  }, [])
  const columns: TableColumnsType<ICartProduct> = [
    {
      title: <h2 className='uppercase font-bold text-center'>Thông tin sản phẩm</h2>,
      key: 'informations',
      dataIndex: 'informations',
      width: 240,
      render: (_, record) => (
        <>
          <Row gutter={8}>
            <Col span={6}>
              <Image src={record.image} alt={record.name} />
            </Col>
            <Col span={18} className='pl-4 flex flex-col justify-between'>
              <div>
                <h6 className='text-sm font-medium line-clamp-2 truncate text-ellipsis'>{record.name}</h6>
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
      dataIndex: 'quantity',
      key: 'quantity',
      width: 100,
      render: (_, record) => (
        <div className='relative flex items-center justify-center max-w-[8rem] '>{record.quantity}</div>
      )
    },
    {
      title: <h2 className='uppercase font-bold text-center'>Thành tiền</h2>,
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: 150,
      render: (_, record) => (
        <div className='text-red-600 font-bold text-center px-5'>
          {(record.price * (1 - record.discount / 100) * record.quantity).toLocaleString('de-DE')}đ
        </div>
      )
    }
  ]
  const handleChangePaymentMethod = (value: PaymentMethods) => {
    setPaymentMethod(value)
  }
  const handleAddAddress = (addressData: IAddress) => {
    callApiAddAddress(async () => {
      const data = await addressApi.addAddress(addressData)
      if (data) {
        addModalControl.setFalse()
        message.success('Thêm địa chỉ thành công!')
        fetchAddresses()
        fetchDefaultAddress()
      } else {
        addModalControl.setFalse()
        message.error('Đã xãy ra lỗi khi thêm địa chỉ!')
      }
    })
  }
  const handleSelectAddress = (address: IAddressReturn) => {
    setSelectedAddress(address)
    selectModalControl.setFalse()
  }
  return (
    <div className='xl:w-1200 mx-auto my-2'>
      <h1 className='uppercase text-left font-bold p-3 bg-gray-100'>Đơn hàng của bạn</h1>
      <Row gutter={12} className='mt-3'>
        <Col span={windowSize.width >= 1024 ? 12 : 24} className='relative w-full '>
          <div className='relative rounded mb-5 p-3 border border-dashed border-blue-cyan bg-white flex flex-col gap-2'>
            <div className='uppercase font-bold text-xl text-dark-blue py-[1px]'>Thông tin thanh toán</div>
            <div className=' p-4 bg-slate-100'>
              <div className='justify-self-start w-full'>
                <div className='flex items-center justify-between w-full'>
                  <div className='font-semibold justify-self-start flex gap-2'>
                    <span className='text-red-600 text-2xl'>{icons.filledLocation}</span>{' '}
                    <span className='text-lg text-red-800'>Địa chỉ nhận hàng:</span>
                  </div>
                  {selectedAddress ? (
                    <div
                      onClick={() => selectModalControl.setTrue()}
                      className='font-semibold text-green-600 hover:cursor-pointer hover:opacity-100 hover:underline opacity-90'
                    >
                      Thay đổi
                    </div>
                  ) : (
                    <div
                      onClick={() => addModalControl.setTrue()}
                      className='font-semibold text-blue-600 hover:cursor-pointer hover:opacity-100 hover:underline opacity-90'
                    >
                      Thêm địa chỉ
                    </div>
                  )}
                </div>
                {selectedAddress && (
                  <div>
                    <div className='font-semibold justify-self-start'>
                      <span>{selectedAddress?.name} </span>
                      <span>({selectedAddress?.phoneNumber})</span>
                    </div>
                    <div className='justify-self-start text-slate-700'>
                      {`${selectedAddress?.addressDetail}, ${selectedAddress?.ward}, ${selectedAddress?.district}, ${selectedAddress?.province}`}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className=' p-4 bg-slate-100 justify-start items-start flex flex-col gap-2'>
              <div className='flex-1 w-full'>
                <div className='flex items-center  justify-between w-full'>
                  <div className='font-semibold justify-self-start flex gap-2 '>
                    <span className='text-lg '>Phương thức vận chuyển:</span>
                  </div>
                </div>
                <div className='flex justify-between w-full'>
                  <div>
                    <div className='font-bold justify-self-start text-blue-500'>
                      <span>Tiêu chuẩn</span>
                    </div>
                    <div className='justify-self-start text-slate-700'>Đảm bảo nhận hàng sau 3-5 ngày</div>
                  </div>
                  <div className='w-0 border-dashed border-r-[1px] border-gray-400'></div>
                  <div className='flex items-end flex-col'>
                    <div className='line-through text-gray-500'>16.000đ</div>
                    <div className='font-semibold'>0đ</div>
                  </div>
                </div>
              </div>
              <div className='flex-1 w-full'>
                <div className='flex items-center  justify-between w-full'>
                  <div className='font-semibold justify-self-start flex gap-2 '>
                    <span className='text-lg '>Phương thức thanh toán:</span>
                  </div>
                </div>
                <div className='flex justify-between w-full'>
                  <Radio.Group
                    onChange={(e) => handleChangePaymentMethod(e.target.value)}
                    value={paymentMethod}
                    className='flex flex-col w-full gap-2'
                  >
                    <Radio value={'cod'} className={`text-slate-700 ${paymentMethod === 'cod' && 'font-semibold'}`}>
                      Thanh toán khi nhận hàng
                    </Radio>
                    <Radio
                      value={'banking'}
                      className={`text-slate-700 ${paymentMethod === 'banking' && 'font-semibold'}`}
                    >
                      Thanh toán trực tuyến
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className=' w-full'>
                <div className='flex items-center justify-between gap-2 w-full'>
                  <div className='flex items-center gap-2'>
                    <img
                      alt='MÃ GIẢM GIÁ'
                      src='//bizweb.dktcdn.net/100/451/884/themes/857425/assets/code_dis.gif?1727683533447'
                      className='max-w-6 mix-blend-multiply align-middle'
                    />{' '}
                    <span className='uppercase font-semibold text-amber-700'>Mã giảm giá:</span>
                  </div>
                  <Input
                    placeholder='Nhập mã giảm giá'
                    className='max-w-[70%] uppercase border-solid border-amber-400 border-[1px] hover:!border-amber-600 focus:!border-amber-600 placeholder-amber-900 placeholder-opacity-40'
                    size='large'
                  />
                </div>
              </div>
            </div>
            <div className=' p-4 bg-slate-100 justify-start items-start flex flex-col gap-4'>
              <div>Lời nhắn:</div>
              <TextArea rows={4} placeholder='Lưu ý cho Shop...' maxLength={6} className='h-10' />
            </div>
          </div>
        </Col>
        <Col span={windowSize.width >= 1024 ? 12 : 24}>
          <Table<ICartProduct>
            columns={columns}
            dataSource={checkoutObj?.checkoutItems}
            rowKey={(record) => record.id}
            scroll={
              columns.length > 0
                ? { y: checkoutObj && checkoutObj?.checkoutItems.length > 3 ? 140 * 3 : undefined, x: 'fit-content' }
                : undefined
            }
            pagination={false}
            className='pb-2'
          />
          <Row justify='end' align='bottom' className='border-solid border-t-[1px] border-slate-500'>
            <Col className='w-full'>
              <div className='flex flex-col-reverse xl:flex-row items-end w-full xs:mb-2'>
                <Col
                  className={` w-full fixed bottom-0 bg-white z-10 rounded p-4 xs:static xs:bg-inherit xs:p-0 xs:rounded-none ${windowSize.width < 480 && ' py-4  border-solid border-t-[1px] border-gray-400'}`}
                >
                  <Row
                    gutter={4}
                    className='xs:py-4 py-0  xs:pr-14 xs:pl-2 pr-0 xs:mb-0 mb-4'
                    justify={windowSize.width >= 480 ? 'end' : 'space-between'}
                  >
                    <Col span={12}>
                      <div className='font-bold w-full text-base text-left'>
                        <span>Tổng tiền: </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className={`font-bold w-full text-red-500 text-base text-end`}>
                        <span>
                          {checkoutObj?.checkoutItems.length
                            ? checkoutObj.checkoutItems
                                .reduce(
                                  (acc, item) =>
                                    acc + (item.price - (item.price * item.discount) / 100) * item.quantity,
                                  0
                                )
                                .toLocaleString('de-DE')
                            : 0}
                        </span>
                        đ
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <Button
                        size='large'
                        className='w-[97%] h-12 text-lg font-semibold rounded-md bg-transparent hover:text-white hover:!bg-red-500 hover:opacity-90  disabled:!text-white text-red-500  border-red-500 border-solid border-[1px] '
                        type='primary'
                        disabled={false}
                      >
                        <Link to={'/cart'}>Quay lại giỏ hàng</Link>
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        size='large'
                        className='w-[97%] h-12 text-lg font-semibold rounded-md bg-green-600 text-white hover:!bg-green-600 hover:opacity-90 disabled:bg-green-600 disabled:opacity-70 disabled:cursor-not-allowed disabled:!text-white border-green-600 border-solid
                        border-[1px] '
                        type='primary'
                        disabled={false}
                      >
                        Đặt hàng
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <AddressModal
        title={'Thêm địa chỉ mới'}
        onSubmit={handleAddAddress}
        loadingSubmit={false}
        modalControl={addModalControl}
      />
      <SelectAddressModal
        modalControl={selectModalControl}
        addressesList={addressesList}
        selectedAddress={selectedAddress}
        handleSelectAddress={handleSelectAddress}
        addModalControl={addModalControl}
      />
    </div>
  )
}
