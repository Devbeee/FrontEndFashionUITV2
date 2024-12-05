import { useEffect, useState } from 'react'

import { message, Spin } from 'antd'

import { addressApi, userApi } from '@/apis'
import { AddressItem, AddressModal, CustomBtn } from '@/components'

import { useApi, useBoolean } from '@/hooks'
import { IAddress, IAddressReturn } from '@/interfaces'
import { useProvincesStore } from '@/stores'
import { getProvinces } from '@/utils'

export const Address = () => {
  const addModalControl = useBoolean(false)
  const updateModalControl = useBoolean(false)
  const [updatingAddress, setUpdatingAddress] = useState<IAddressReturn>()
  const [defaultAddress, setDefaultAddress] = useState<IAddressReturn>()

  const { loading: addressLoading, callApi: callApiAddAddress } = useApi<void>()
  const [addressesList, setAddressesList] = useState<IAddressReturn[]>()
  const { setCurrentProvinces, currentProvinces } = useProvincesStore()

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

  const handleToggleUpdateModal = (defaultData: IAddressReturn) => {
    setUpdatingAddress(defaultData)
    updateModalControl.toggle()
  }

  const handleUpdateAddress = (addressData: IAddress) => {
    if (updatingAddress) {
      callApiAddAddress(async () => {
        const data = await addressApi.updateAddress({ ...addressData, id: updatingAddress.id })
        if (data) {
          updateModalControl.setFalse()
          message.success('Cập nhật địa chỉ thành công!')
          fetchAddresses()
          fetchDefaultAddress()
        } else {
          updateModalControl.setFalse()
          message.error('Đã xãy ra lỗi khi cập nhật địa chỉ!')
        }
      })
    }
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
  const handleDeleteAddress = (id: string, e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e?.stopPropagation()
    if (id) {
      callApiAddAddress(async () => {
        const data = await addressApi.deleteAddress(id)
        if (data) {
          message.success('Xóa địa chỉ thành công!')
          fetchAddresses()
          fetchDefaultAddress()
        } else {
          message.error('Đã xãy ra lỗi khi xóa địa chỉ!')
        }
      })
    }
  }
  const fetchProvinces = async () => {
    const provincesList = await getProvinces()
    setCurrentProvinces(provincesList)
  }
  const fetchDefaultAddress = () => {
    callApiAddAddress(async () => {
      const data = await userApi.getDefaultAddress()
      if (data) {
        setDefaultAddress(data.data)
      } else {
        message.error('Đã xãy ra lỗi khi lấy địa chỉ mặc định!')
      }
    })
  }
  const handleSetDefaultAddress = (addressId: string) => {
    callApiAddAddress(async () => {
      const data = await userApi.setDefaultAddress(addressId)
      if (data) {
        setDefaultAddress(data.data)
        fetchAddresses()
        fetchDefaultAddress()
      } else {
        message.error('Đã xãy ra lỗi khi lấy địa chỉ mặc định!')
      }
    })
  }
  useEffect(() => {
    fetchAddresses()
    fetchDefaultAddress()
    if (currentProvinces.length <= 0) fetchProvinces()
  }, [])
  return (
    <section className='px-2 xs:px-4 '>
      <div className='flex items-center justify-between w-full'>
        <div className='text-2xl font-bold xs:text-3xl text-dark-blue'>Địa chỉ của bạn</div>
        <div className='w-fit'>
          <CustomBtn onClick={addModalControl.toggle} type='primary' title='Thêm địa chỉ'></CustomBtn>
        </div>
      </div>
      {!addressLoading ? (
        addressesList?.length ? (
          <div className='max-h-[78vh] overflow-y-scroll w-full flex flex-col items-start gap-4 pl-4 my-4 pr-8 py-2'>
            {defaultAddress && (
              <AddressItem
                isDefault={true}
                key={defaultAddress.id}
                address={defaultAddress}
                handleSetDefaultAddress={() => {}}
                handleDeleteAddress={handleDeleteAddress}
                handleToggleUpdateModal={handleToggleUpdateModal}
              />
            )}
            {addressesList?.map((address: IAddressReturn) => {
              if (address.id !== defaultAddress?.id) {
                return (
                  <AddressItem
                    isDefault={false}
                    key={address.id}
                    address={address}
                    handleSetDefaultAddress={handleSetDefaultAddress}
                    handleDeleteAddress={handleDeleteAddress}
                    handleToggleUpdateModal={handleToggleUpdateModal}
                  />
                )
              }
            })}
          </div>
        ) : (
          <div className='text-xl mt-10 text-red-500'>Bạn chưa thêm địa chỉ nào</div>
        )
      ) : (
        <Spin />
      )}
      {addModalControl.value && (
        <AddressModal
          title={'Thêm thông tin địa chỉ mới'}
          onSubmit={handleAddAddress}
          loadingSubmit={false}
          modalControl={addModalControl}
        />
      )}
      {updateModalControl.value && (
        <AddressModal
          title={'Chỉnh sửa thông tin địa chỉ'}
          defaultData={updatingAddress}
          onSubmit={handleUpdateAddress}
          loadingSubmit={false}
          modalControl={updateModalControl}
        />
      )}
    </section>
  )
}
