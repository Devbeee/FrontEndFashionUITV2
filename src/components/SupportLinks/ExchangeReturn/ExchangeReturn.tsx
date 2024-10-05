import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const ExchangeReturn = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Hướng dẫn đổi trả</Title>
      <Text><b>Trường hợp được đổi/trả hàng</b></Text>
      <Text>Sản phẩm mua rồi nhưng không ưng ý</Text>
      <Text>- Người mua có thể trả hàng khi không vừa ý trong vòng 1h kể từ khi nhận hàng, Bean sẽ đổi sản phẩm cho khách. Sản phẩm muốn đổi hoặc trả cần giữ sản phâm nguyên đai, chưa mở nắp, chưa sử dụng. Không nhất thiết còn tem mác hay hỏng hộp. Không bị méo mó, biến dạng.</Text>
      <Text>Sản phẩm mua bị lỗi</Text>
      <Text>Quý khách vui lòng kiểm tra sản phẩm trước khi thanh toán. Trong trường hợp sản phẩm bị hư hại trong quá trình vận chuyển, quý khách vui lòng từ chối và gửi lại sản phẩm cho chúng tôi</Text>
      <Text>Sản phẩm không sử dụng được ngay khi được giao</Text>
      <Text>Trước tiên, hãy dành thời gian đọc kỹ tem hướng dẫn sử dụng và chắc rằng sản phẩm phù hợp với nhu cầu của bạn. Vui lòng liên hệ ngay cho chúng tôi để được hỗ trợ hồi trả lại hàng</Text>
      <Text>Sản phẩm giao không đúng theo đơn đặt hàng</Text>
      <Text>Bạn nghĩ rằng sản phẩm giao cho bạn không đúng với đơn đặt hàng? Hãy liên hệ với chúng tôi càng sớm càng tốt, hệ thống của chúng tôi sẽ kiểm tra nếu hàng của bạn bị gửi nhầm. Trong trường hợp đó, chúng tôi sẽ thay thế đúng mặt hàng bạn yêu cầu (khi có hàng).</Text>
      <Text><b>Điều kiện đổi trả hàng</b></Text>
      <Text>Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng.</Text>
      <Text>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</Text>
      <Text>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</Text>
      <Text>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</Text>
      <Text>- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng.</Text>
      <Text><b>Điều kiện đổi trả hàng</b></Text>
      <Text>Bước 1: Sau khi nhận được hàng. Yêu cầu quý vị kiểm tra kỹ 1 lần trước khi nhận hàng. Nếu có vấn đề xin vui lòng liên hệ Trung tâm hỗ trợ khách hàng tại thời điểm nhân viên giao hàng còn ở đó</Text>
      <Text>- Trường hợp sau khi nhân viên giao hàng đã đi</Text>
      <Text>- Nếu muốn đổi trả hàng có thể liên hệ với chúng tôi để được xử lý và hẹn lịch đổi trả hàng</Text>
      <Text>Bước 2: Sau khi Trung tâm hỗ trợ khách hàng thông báo lịch hẹn nhận hàng trả</Text>
      <Text><b>Trân Trọng!</b></Text>
    </Space>
  )
}

export default ExchangeReturn