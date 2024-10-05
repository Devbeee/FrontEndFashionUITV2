import { Space, Typography } from "antd"
import { useEffect } from "react";
const { Title, Text } = Typography

const ExchangePolicies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">chính sách đổi sản phẩm</Title>
      <Text>+ Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện</Text>
      <Text>+ Nằm trong chính sách đổi trả sản phẩm của Bean</Text>
      <Text>+ Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa giặt là</Text>
      <Text>+ Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng</Text>
      <Text>+ Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí</Text>
      <Text>+ Đối với khách VIP thì khi đổi trả Bean sẽ hỗ trợ miễn phí quá trình đổi trả, sửa chữa</Text>
      <Text><b>Điều kiện đổi trả hàng:</b></Text>
      <Text>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</Text>
      <Text>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</Text>
      <Text>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</Text>
      <Text>- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng.</Text>
      <Text><b>Quy trình đổi trả hàng</b></Text>
      <Text>Bước 1: Sau khi nhận được hàng. Yêu cầu quý vị kiểm tra kỹ 1 lần trước khi nhận hàng. Nếu có vấn đề xin vui lòng liên hệ Trung tâm hỗ trợ khách hàng tại thời điểm nhân viên giao hàng còn ở đó</Text>
      <Text>- Trường hợp sau khi nhân viên giao hàng đã đi</Text>
      <Text>- Nếu muốn đổi trả hàng có thể liên hệ với chúng tôi để được xử lý và hẹn lịch đổi trả hàng</Text>
      <Text>Bước 2: Sau khi Trung tâm hỗ trợ khách hàng thông báo lịch hẹn nhận hàng trả</Text>
    </Space>
  )
}

export default ExchangePolicies