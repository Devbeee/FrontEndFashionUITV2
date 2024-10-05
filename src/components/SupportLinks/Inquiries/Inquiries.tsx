import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const Inquiries = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Giải đáp thắc mắc</Title>
      <Text><b>Khách hàng ở Tỉnh hoặc ở nước ngoài có mua được trên web không? Cách giao dịch như thế nào?</b></Text>
      <Text>Hoàn toàn có thể được, Internet đã tạo ra môi trường làm việc không giới hạn khoảng cách địa lý. Hiện nay chúng tôi đã phục vụ được hơn 600.000 khách hàng trên toàn quốc và ở nước ngoài</Text>
      <Text>Cách giao dịch khá đơn giản bạn chỉ cần thêm sản phẩm cần mua vào giỏ hàng sau đó tiến hành thanh toán </Text>
      <Text>Khi đến trang thanh toán thì nhập các thông tin cần thiết như tên, số điện thoại, địa chỉ và tiến hành đặt hàng nhé!</Text>
    </Space>
  )
}

export default Inquiries