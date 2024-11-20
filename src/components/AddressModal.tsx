import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button, Form, Modal, Select } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { IAddressFieldData, IAddressFilterReturn, IUseBoolean } from '@/interfaces'
import { getDistricts, getProvinces, getWards, icons, phoneRegExp } from '@/utils'
import { useBoolean } from '@/hooks'
import { CustomInput } from '@/components/CustomComponents/CustomInput'
import { Map } from '@/components/CustomComponents/Map'

type AddressModalProps = {
  modalControl: IUseBoolean
}
type AddressFields = 'name' | 'phoneNumber' | 'province' | 'district' | 'ward' | 'addressDetail'
const addressSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập họ tên!'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required('Vui lòng nhập mật khẩu!'),
  province: yup.string().required('Vui lòng chọn tỉnh!'),
  district: yup.string().required('Vui lòng chọn thành phố!'),
  ward: yup.string().required('Vui lòng chọn huyện, xã!'),
  addressDetail: yup.string().required('Vui lòng nhập địa chỉ!')
})

export const AddressModal: React.FC<AddressModalProps> = ({ modalControl }) => {
  const [provinces, setProvinces] = useState<IAddressFieldData[]>()
  const [districts, setDistricts] = useState<IAddressFieldData[]>()
  const [wards, setWards] = useState<IAddressFieldData[]>()
  const mapVisible = useBoolean(false)
  const isFetchingAddress = useBoolean(false)

  const handleCancel = async () => {
    await reset()
    modalControl.setFalse()
  }
  const defaultWardData = {
    value: '0',
    label: 'Khác',
    id: ''
  }
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    resetField,
    clearErrors,
    formState: { errors }
  } = useForm({
    shouldUnregister: false,
    resolver: yupResolver(addressSchema)
  })

  const fetchProvinces = async (): Promise<IAddressFieldData[]> => {
    const provinceData = await getProvinces()
    setProvinces(provinceData)
    return provinceData
  }
  const fetchDistricts = async (provinceID: string): Promise<IAddressFieldData[]> => {
    const districtData = await getDistricts(provinceID)
    setDistricts(districtData)
    return districtData
  }
  const fetchWards = async (districtID: string): Promise<IAddressFieldData[]> => {
    const wardData = await getWards(districtID)
    setWards([...wardData, defaultWardData])
    return wardData
  }
  const resetAddressFields = (fields: AddressFields[]) => {
    fields.forEach((field) => resetField(field))
  }

  useEffect(() => {
    fetchProvinces()
  }, [])
  const addressFields: AddressFields[] = ['province', 'district', 'ward', 'addressDetail']
  const handleSelectProvince = async (provinceParam: string) => {
    resetAddressFields(['district', 'ward', 'addressDetail'])
    const province = provinces?.find((item) => item.value === provinceParam)
    if (province) {
      await fetchDistricts(province.id)
    } else {
      resetAddressFields(addressFields)
    }
  }

  const handleSelectDistrict = async (districtParam: string) => {
    resetAddressFields(['ward', 'addressDetail'])
    const district = districts?.find((item) => item.value === districtParam)
    if (district) {
      await fetchWards(district.id)
    } else {
      resetAddressFields(['district', 'ward', 'addressDetail'])
    }
  }

  const handlePickLocation = async (IAddressFilterReturn: IAddressFilterReturn) => {
    try {
      const province = provinces?.find((item) =>
        item.value.toLocaleLowerCase().includes(IAddressFilterReturn.province.toLocaleLowerCase())
      )
      if (!province) {
        throw new Error('Invalid province selected')
      }
      setValue('province', province.value)

      const districtData = await fetchDistricts(province.id)
      const district = districtData.find((item) =>
        item.value.toLocaleLowerCase().includes(IAddressFilterReturn.district.toLocaleLowerCase())
      )

      if (!district) {
        throw new Error('Invalid district selected')
      }
      setValue('district', district.value)

      const wardData = await fetchWards(district.id)
      const ward = wardData.find((item) =>
        item.value.toLocaleLowerCase().includes(IAddressFilterReturn.ward.toLocaleLowerCase())
      )
      if (ward) {
        console.log(ward)

        setValue('ward', ward.value)
      } else {
        console.log(IAddressFilterReturn.ward)
        setValue('ward', '0')
      }
      setValue('addressDetail', IAddressFilterReturn.addressDetail)

      addressFields.forEach((item) => {
        clearErrors(item)
      })
    } catch (error) {
      resetAddressFields(['province', 'district', 'ward', 'addressDetail'])
      console.error((error as Error).message)
    }
  }
  const handleAddAddress = (data: any) => {
    console.log(data)
  }

  return (
    <Modal
      title='Thêm địa chỉ mới'
      open={modalControl.value}
      onOk={handleSubmit(handleAddAddress)}
      onCancel={handleCancel}
      width={800}
      footer={[
        ,
        <div className='flex justify-between'>
          <div>
            {mapVisible.value ? (
              <Button
                onClick={mapVisible.toggle}
                className={'bg-red-600 text-white hover:!text-red-600 hover:!border-red-600'}
                variant='solid'
              >
                Ẩn bản đồ
                {icons.map}
              </Button>
            ) : (
              <Button
                onClick={mapVisible.toggle}
                className={'bg-green-600 text-white hover:!text-green-600 hover:!border-green-600'}
                variant='solid'
              >
                Chọn trên bản đồ
                {icons.map}
              </Button>
            )}
          </div>
          <div className='flex gap-2'>
            <Button key='back' onClick={handleCancel}>
              Hủy
            </Button>
            <Button key='submit' type='primary' onClick={handleSubmit(handleAddAddress)}>
              Ok
            </Button>
          </div>
        </div>
      ]}
    >
      <Form className='mb-4' onFinish={handleSubmit(handleAddAddress)} layout='vertical'>
        <CustomInput
          className='mt-0'
          key={'name'}
          name={'name'}
          size='large'
          type={'text'}
          control={control}
          errors={errors}
          placeholder={'Họ tên'}
        />
        <CustomInput
          className='mt-0'
          key={'phoneNumber'}
          name={'phoneNumber'}
          size='large'
          type={'text'}
          control={control}
          errors={errors}
          placeholder={'Số điện thoại'}
        />
        <div className='flex flex-wrap justify-between'>
          <Form.Item
            className='w-full mt-4 mb-0 text-lg font-normal text-left border-0 lg:w-60 hover:border-dark-blue'
            validateStatus={errors['province'] ? 'error' : ''}
            help={errors['province']?.message}
          >
            <Controller
              name={'province'}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  loading={isFetchingAddress.value}
                  disabled={isFetchingAddress.value}
                  size='large'
                  onSelect={() => handleSelectProvince(getValues('province'))}
                  showSearch
                  value={getValues('province')}
                  placeholder='Chọn tỉnh, thành phố'
                  filterOption={(input, option) => (option?.value ?? '').toLowerCase().includes(input.toLowerCase())}
                  options={provinces}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            className='w-full mt-4 mb-0 text-lg font-normal text-left border-0 lg:w-60 hover:border-dark-blue'
            validateStatus={errors['district'] ? 'error' : ''}
            help={errors['district']?.message}
          >
            <Controller
              name={'district'}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  size='large'
                  loading={isFetchingAddress.value}
                  disabled={isFetchingAddress.value}
                  onSelect={() => handleSelectDistrict(getValues('district'))}
                  showSearch
                  value={getValues('district')}
                  placeholder='Chọn quận, huyện'
                  filterOption={(input, option) => (option?.value ?? '').toLowerCase().includes(input.toLowerCase())}
                  options={districts}
                />
              )}
            />
          </Form.Item>
          <Form.Item
            className='w-full mt-4 mb-0 text-lg font-normal text-left border-0 lg:w-60 hover:border-dark-blue'
            validateStatus={errors['ward'] ? 'error' : ''}
            help={errors['ward']?.message}
          >
            <Controller
              name={'ward'}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  size='large'
                  loading={isFetchingAddress.value}
                  disabled={isFetchingAddress.value}
                  showSearch
                  value={getValues('ward')}
                  placeholder='Chọn phường, xã'
                  filterOption={(input, option) => (option?.value ?? '').toLowerCase().includes(input.toLowerCase())}
                  options={wards}
                />
              )}
            />
          </Form.Item>
        </div>
        <CustomInput
          className='mt-0'
          key={'addressDetail'}
          name={'addressDetail'}
          size='large'
          type={'text'}
          disabled={isFetchingAddress.value}
          control={control}
          errors={errors}
          placeholder={'Địa chỉ'}
        />
      </Form>
      {mapVisible.value && <Map isFetchingAddress={isFetchingAddress} handlePickLocation={handlePickLocation} />}
    </Modal>
  )
}

// const handlePickLocation = (IAddressFilterReturn: IAddressFilterReturn) => {
//   let isError = false
//   const province = provinces?.find((item) => {
//     if (item.value.toLocaleLowerCase().includes(IAddressFilterReturn.province.toLocaleLowerCase())) {
//       setValue('province', item.value)
//     }
//     return item.value.toLocaleLowerCase().includes(IAddressFilterReturn.province.toLocaleLowerCase())
//   })
//   if (province) {
//     const fetchDistricts = async () => {
//       const districtData = await getDistricts(province.id)
//       setDistricts(districtData)
//       const district = districtData.find((item) => {
//         if (item.value.toLocaleLowerCase().includes(IAddressFilterReturn.district.toLocaleLowerCase())) {
//           setValue('district', item.value)
//         }
//         return item.value.toLocaleLowerCase().includes(IAddressFilterReturn.district.toLocaleLowerCase())
//       })

//       if (district) {
//         const fetchWards = async () => {
//           const wardData = await getWards(district.id)
//           setWards([...wardData, defaultWardData])
//           setValue('ward', IAddressFilterReturn.ward)
//           setValue('addressDetail', IAddressFilterReturn.addressDetail)
//         }
//         fetchWards()
//       } else {
//         isError = true
//       }
//     }
//     fetchDistricts()
//   } else {
//     isError = true
//   }
//   if (isError) {
//     resetField('province')
//     resetField('district')
//     resetField('ward')
//     resetField('addressDetail')
//   } else {
//     clearErrors('province')
//     clearErrors('district')
//     clearErrors('ward')
//     clearErrors('addressDetail')
//   }
// }
