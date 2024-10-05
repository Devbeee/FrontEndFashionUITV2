import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const Gift = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Quà tặng tri ân</Title>
        <Text>Chương trình tri ân diễn ra vào ngày cuối tuần của tuần cuối hàng tháng</Text>
        <Text>+ Với mong muốn mang đến cho Quý khách hàng những sản phẩm chất lượng tốt nhất đồng thời đi kèm với dịch vụ tốt nhất và chính sách chăm sóc khách hàng tuyệt vời nhất.</Text>
        <Text>+ Chương trình thẻ hội viên được xây dựng để tạo nên chính sách tri ân khách hàng đã tin chọn sản phẩm của chúng tôi. Quý khách mua sản phẩm của Bean sẽ được cộng dồn điểm tương ứng doanh số mua hàng với mỗi 100.000 VNĐ tương ứng với 1 điểm.</Text>
        <Text><b>1. Điều kiện để trở thành khách hàng thân thiết trong chính sách tri ân khách hàng</b></Text>
        <Text>+ Có mua ít nhất 01 sản phẩm bất kỳ có giá trị từ 1.000.000 VNĐ trở lên tại hệ thống và các gian hàng của Bean.</Text>
        <Text>+ Cung cấp đầy đủ và chính xác thông tin cá nhân.</Text>
        <Text><b>Bean</b> xin thân tặng Quý khách hàng Chương trình <b>"TRI ÂN KHÁCH HÀNG THÂN THIẾT"</b> như một lời tri ân sâu sắc cảm ơn sự tin yêu của quý khách dành cho <b>Bean.</b></Text>
    </Space>
  )
}

export default Gift