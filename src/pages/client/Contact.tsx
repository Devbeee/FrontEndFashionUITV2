const { Title, Text } = Typography
import { Typography } from "antd"

export const Contact = () => {
    const handleSubmit = () => {}
  return (
    <div className="flex flex-row w-full gap-4 justify-center">
        <div className="flex flex-col w-[30%] place-items-start text-left gap-4">
            <Title level={5} className="uppercase font-[900]">Nơi giải đáp toàn bộ mọi thắc mắc của bạn?</Title>
            <Text>Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại giá trị tốt nhất</Text>
            <Text><span className="font-bold">Địa chỉ</span>: 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh</Text>
            <Text className="font-bold">Hotline<span className="text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer">: 1900 6750</span></Text>
            <Text className="font-bold">Email<span className="text-yellow hover:text-blue-cyan font-semibold hover:cursor-pointer">: support@sapo.vn</span></Text>
            <form onSubmit={handleSubmit} className="w-full">
            <label>
                <Title level={4} className="uppercase">Liên hệ với chúng tôi</Title>
            </label>
            <div className="flex flex-col gap-4 text-sm w-full pb-5">
                <div className="flex flex-row h-[40px] gap-4">
                    <input className="w-[50%] border rounded-md p-4" type="text" placeholder="Họ và tên"/>
                    <input className="w-[50%] border rounded-md p-4" type="text" placeholder="Email"/>
                </div>
                <input className="w-full h-[40px] border rounded-md p-4" type="text" placeholder="Điện thoại"/>
                <textarea className="w-full h-[200px] border rounded-md p-4 resize-y" name="" id="" placeholder="Nội dung"></textarea>
                <button type="submit" className="self-start border bg-blue-cyan text-white opacity-90 hover:bg-yellow rounded-md px-4 py-2">Gửi thông tin</button>
            </div>
            </form> 
        </div>
        <div className="w-[35%]">
        <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416692!2d106.80047917465674!3d10.870008889284488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1711589812685!5m2!1svi!2s"
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
            className="w-full h-[88%] border rounded-md"
        ></iframe>
        </div>
    </div>
  )
}
