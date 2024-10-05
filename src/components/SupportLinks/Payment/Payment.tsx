import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Hướng dẫn thanh toán</Title>
      <Text><b>Lựa chọn thông tin tài khoản thanh toán</b></Text>
      <Text>Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống</Text>
      <Text>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình</Text>
      <Text>Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản</Text>
      <Text>+ Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình</Text>
      <Text>+ Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</Text>
      <Text>Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ liên hệ bằng cách gọi điện lại để xác nhận lại đơn hàng và địa chỉ của bạn.</Text>
      <Text>Trân trọng cảm ơn.</Text>
    </Space>
  )
}

export default Payment