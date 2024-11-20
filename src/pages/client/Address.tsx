import { CustomBtn } from '@/components'
import { AddressModal } from '@/components/AddressModal'
import { useBoolean } from '@/hooks'

export const Address = () => {
  const modalControl = useBoolean(false)
  return (
    <section className='px-2 xs:px-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='text-2xl font-bold xs:text-3xl text-dark-blue'>Địa chỉ của bạn</div>
        <div className='w-fit'>
          <CustomBtn onClick={() => modalControl.toggle()} type='primary' title='Thêm địa chỉ'></CustomBtn>
        </div>
      </div>
      {modalControl.value && <AddressModal modalControl={modalControl} />}
    </section>
  )
}
