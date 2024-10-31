import { Typography, Input, Form } from 'antd'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { CustomBtn, CustomInput } from '@/components'

import { contactFields, validationRegex } from '@/utils'
import { IContact } from '@/interfaces/contact.interface'

const { Title, Text } = Typography

const contactSchema = yup.object().shape({
  fullName: yup.string().required('Vui lòng nhập họ và tên!'),
  email: yup.string().email('Email không hợp lệ!').required('Vui lòng nhập email!'),
  phoneNumber: yup
    .string()
    .matches(validationRegex.PHONE_REGEX, 'Số điện thoại không hợp lệ!')
    .required('Vui lòng nhập số điện thoại!'),
  description: yup.string().required('Vui lòng nhập nội dung!')
})

export const Contact: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit: SubmitHandler<IContact> = (data) => {
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.ok) {
        reset();
      } else {
        throw new Error('Failed to send contact information');
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
  }
  const iframeUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.7590851236018!2d106.65082804811797!3d10.771568590496535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec07488c543%3A0x7dc9617e924ddb50!2zNzAgxJAuIEzhu68gR2lh!5e0!3m2!1sen!2s!4v1729658600054!5m2!1sen!2s'

  return (
    <div className='flex flex-row w-full gap-4 justify-center'>
      <div className='flex flex-col w-[30%] place-items-start text-left gap-4'>
        <Title level={5} className='uppercase font-[900]'>
          Nơi giải đáp toàn bộ mọi thắc mắc của bạn?
        </Title>
        <Text>Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại giá trị tốt nhất</Text>
        <Text>
          <span className='font-bold'>Địa chỉ</span>: 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh
        </Text>
        <Text className='font-bold'>
          Hotline
          <span className='text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer'>: 1900 6750</span>
        </Text>
        <Text className='font-bold'>
          Email
          <span className='text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer'>: support@sapo.vn</span>
        </Text>
        <Form className='w-full' onFinish={handleSubmit(onSubmit)}>
          <label>
        <Title level={4} className='uppercase'>
          Liên hệ với chúng tôi
        </Title>
          </label>
          <div className='flex flex-col gap-2 text-sm w-full pb-5'>
            <div className='flex flex-row w-full gap-4'>
              {contactFields.map((field) => {
                if (field.name === 'fullName' || field.name === 'email')
                  return (
                    <CustomInput
                      key={field.name}
                      size='large'
                      name={field.name}
                      control={control}
                      errors={errors}
                      placeholder={field.placeholder}
                    />
                  )
              })}
            </div>
            {contactFields.map((field) => {
              if (field.name === 'phoneNumber')
                return (
                  <CustomInput
                    key={field.name}
                    size='large'
                    name={field.name}
                    control={control}
                    errors={errors}
                    placeholder={field.placeholder}
                  />
                )
            })}
            <Form.Item
              name='message'
              validateStatus={errors['description'] ? 'error' : ''}
              help={errors['description']?.message}
            >
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <Input.TextArea
                    {...field}
                    rows={8}
                    placeholder='Nội dung'
                    className='text-lg font-medium border-1 border-gray-200 rounded-md mt-4 hover:!border-dark-blue focus-within:!border-dark-blue focus-within:!shadow-dark-blue'
                  />
                )}
              />
            </Form.Item>
            <CustomBtn type='primary' title='Gửi thông tin' htmlType='submit' className='self-start w-[24%] !mt-0' />
          </div>
        </Form>
      </div>
      <div className='w-[35%]'>
        <iframe
          title='Map'
          src={iframeUrl}
          loading={'lazy'}
          referrerPolicy={'no-referrer-when-downgrade'}
          className='w-full h-[88%] border rounded-md'
        ></iframe>
      </div>
    </div>
  )
}
