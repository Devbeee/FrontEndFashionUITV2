const { Title, Text } = Typography
import { Typography,Input, Form } from "antd"
import { CustomBtn, CustomInput } from "@/components"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {validationContact} from "@/utils"
import {authFields} from "@/utils"

interface IFormInputs {
    fullName: string,
    email: string,
    phoneNumber: string,
    content: string
  }

const schema = yup.object().shape({
    fullName: yup.string().required('Please input your name!'),
    email: yup.string().email('Please input a valid email!').required('Please input your email!'),
    phoneNumber: yup.string().matches(validationContact.PHONE_REGEX, 'Please input a valid phone number!').required('Please input your phone number!'),
    content: yup.string().required('Please input your content!')
  })

export const Contact = () => {
      const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      })
    
      const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data); 
      const iframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.7590851236018!2d106.65082804811797!3d10.771568590496535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec07488c543%3A0x7dc9617e924ddb50!2zNzAgxJAuIEzhu68gR2lh!5e0!3m2!1sen!2s!4v1729658600054!5m2!1sen!2s";
    
  return (
    <div className="flex flex-row w-full gap-4 justify-center">
        <div className="flex flex-col w-[30%] place-items-start text-left gap-4">
            <Title level={5} className="uppercase font-[900]">Nơi giải đáp toàn bộ mọi thắc mắc của bạn?</Title>
            <Text>Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại giá trị tốt nhất</Text>
            <Text><span className="font-bold">Địa chỉ</span>: 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh</Text>
            <Text className="font-bold">Hotline<span className="text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer">: 1900 6750</span></Text>
            <Text className="font-bold">Email<span className="text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer">: support@sapo.vn</span></Text>
            <Form className="w-full" onFinish={handleSubmit(onSubmit)}>
            <label>
                <Title level={4} className="uppercase">Liên hệ với chúng tôi</Title>
            </label>
            <div className="flex flex-col gap-2 text-sm w-full pb-5">
                <div className="flex flex-row h-[40px] w-full gap-4">
                {authFields.map((field) => {
                  if(field.name === 'fullName' || field.name === 'email') 
                    return (
                      <CustomInput
                      key={field.name}
                      size='large'
                      name={field.name}
                      control={control}
                      errors={errors}
                      placeholder={field.placeholder}/>
                    )
                })}
                </div>
                {authFields.map((field) => {
                if(field.name === 'phoneNumber') 
                  return (
                    <CustomInput
                      key={field.name}
                      size='large'
                      name={field.name}
                      control={control}
                      errors={errors}
                      placeholder={field.placeholder}
                      className="mt-4"/>
                  )
                })}
                <Form.Item
                    name='message'
                    validateStatus={errors['content'] ? 'error' : ''}
                    help={errors['content']?.message}>
                    <Controller
                    name='content'
                    control={control}
                    render={({ field }) => (
                        <Input.TextArea
                        {...field}
                        rows={8}
                        placeholder="Nội dung" />
                    )}/>
                </Form.Item>
                <CustomBtn type="primary" title="Gửi thông tin" htmlType='submit' className="self-start w-[24%]"/>
            </div>
            </Form> 
        </div>
        <div className="w-[35%]">
        <iframe
            title="Map"
            src={iframeUrl}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
            className="w-full h-[88%] border rounded-md"
        ></iframe>
        </div>
    </div>
  )
}
