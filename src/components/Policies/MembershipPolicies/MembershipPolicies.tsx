import { Space, Typography } from "antd"
import { useEffect } from "react";
const { Title, Text } = Typography

const MembershipPolicies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">chính sách thành viên</Title>
      <Text>Điều kiện chính sách thành viên</Text>
      <Text><b>1. Thẻ thành viên</b></Text>
      <Text>Điều kiện cấp thẻ thành viên: Khi khách hàng mua hàng trên hệ thống cửa hàng Bean Fashion sẽ được cấp thẻ thành viên</Text>
      <Text><b>2. Thẻ VIP</b></Text>
      <Text><b>Điều kiện nhận thẻ VIP:</b></Text>
      <Text>+ Có giá trị tổng đơn hàng lớn hơn 15 triệu/ tháng</Text>
      <Text>+ Mua hàng với giá trị 5 triệu trở lên</Text>
      <Text>+ Tham gia các hoạt động, chương trình khuyến mãi của Bean</Text>
      <Text><b>Lưu ý: </b>Hạn mức 10, 20, 30, 50, 100 triệu đồng là tính từ thời điểm bắt đầu mua tới khi lên thẻ. Khi lên thẻ VIP và tích tiếp lên 20 đến 100 triệu, tổng tiền này là tính từ khi khách hàng mua lần đầu và cộng dồn lên</Text>
    </Space>
  )
}

export default MembershipPolicies