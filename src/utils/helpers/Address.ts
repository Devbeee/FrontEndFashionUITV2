import { IAddressFieldData, IAddressFilterReturn } from '@/interfaces'
import axios from 'axios'

type locationReturn = {
  coords?: GeolocationCoordinates
  err?: string
}

export const getProvinces = async (): Promise<IAddressFieldData[]> => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_GHN_LOCATION_API_URL}/province`, {
      headers: {
        'Content-Type': 'application/json',
        Token: import.meta.env.VITE_GHN_TOKEN
      }
    })
    return data.data.map((item: any) => ({
      value: item.ProvinceName,
      label: item.ProvinceName,
      id: item.ProvinceID
    }))
  } catch (error) {
    console.error('Error fetching provinces:', error)
    throw new Error('Failed to fetch provinces')
  }
}

export const getDistricts = async (provinceId: string): Promise<IAddressFieldData[]> => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_GHN_LOCATION_API_URL}/district`, {
      headers: {
        'Content-Type': 'application/json',
        Token: import.meta.env.VITE_GHN_TOKEN
      },
      params: {
        province_id: provinceId
      }
    })
    return data.data.map((item: any) => ({
      value: item.DistrictName,
      label: item.DistrictName,
      id: item.DistrictID
    }))
  } catch (error) {
    console.error('Error fetching districts:', error)
    throw new Error('Failed to fetch districts')
  }
}

export const getWards = async (districtID: string): Promise<IAddressFieldData[]> => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_GHN_LOCATION_API_URL}/ward`, {
      headers: {
        'Content-Type': 'application/json',
        Token: import.meta.env.VITE_GHN_TOKEN
      },
      params: {
        district_id: districtID
      }
    })
    return data.data.map((item: any) => ({
      value: item.WardName,
      label: item.WardName,
      id: item.WardCode
    }))
  } catch (error) {
    console.error('Error fetching wards:', error)
    throw new Error('Failed to fetch wards')
  }
}

export const getLocation = (): Promise<locationReturn> => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({ coords: position.coords })
        },
        (error) => {
          let errorMessage = ''
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'User denied the request for Geolocation.'
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable.'
              break
            case error.TIMEOUT:
              errorMessage = 'The request to get user location timed out.'
              break
            default:
              errorMessage = 'An unknown error occurred.'
              break
          }
          resolve({ err: errorMessage })
        }
      )
    } else {
      resolve({ err: 'Geolocation is not supported by this browser.' })
    }
  })
}

export const addressFilter = (rawAddressData: string): IAddressFilterReturn => {
  const addressArray = rawAddressData.split(',').map((item) => item.trim())
  addressArray.pop()
  if (/\d+/.test(addressArray[addressArray.length - 1].trim())) {
    addressArray.pop()
  }
  const province = addressArray.pop()
  const addressObject = {
    province: province?.replace(/^(Tỉnh|Thành phố)\s/, '').trim() || 'null',
    district: addressArray.pop() || 'null',
    ward: addressArray.pop()?.replace(/^[^.]*\./, '') || 'null',
    addressDetail: addressArray.join(', ') || ''
  }
  return addressObject
}
