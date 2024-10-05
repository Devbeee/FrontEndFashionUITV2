import { Space, Typography } from "antd"
import { useEffect } from "react";
const { Title, Text } = Typography
const PaymentPolicies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Chính sách thanh toán</Title>
      <Text><b>Khách hàng thanh toán trực tiếp tại cửa hàng </b></Text>
      <Text>+ Nhận ưu đãi</Text>
      <Text>+ Nhận quà tặng kèm</Text>
      <Text>+ Checkin tại cửa hàng</Text>
      <Text><b>Khách hàng thanh toán online</b></Text>
      <Text>+ Chuyển khoản trước khi nhận hàng</Text>
      <Text>+ Quà tặng kèm bất kỳ</Text>
      <Text>Khách hàng có nhu cầu khiếu nại, đổi trả sản phẩm do lỗi của Bean có thể liên hệ qua Hotline 1900 6750 để được hỗ trợ sớm nhất.</Text>
      <Text>Tư vấn viên sẽ hướng dẫn khách hàng các bước cần thiết để tiến hành trả thanh toán.</Text>
    </Space>
  )
}

export default PaymentPolicies