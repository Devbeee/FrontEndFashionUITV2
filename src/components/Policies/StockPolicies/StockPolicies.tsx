import { Space, Typography } from "antd"
import { useEffect } from "react";
const { Title, Text } = Typography
const StockPolicies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Nhập hàng giá sỉ</Title>
      <Title level={5} className="uppercase">1. ĐIỀU KIỆN BÁN SỈ</Title>
      <Text>- Chúng tôi cung cấp tất cả các mặt hàng có trên website chính thức</Text>
      <Text>- Mỗi đơn hàng từ 10 sản phẩm hoặc số lượng nhất định đối với các mặt hàng khác của chúng tôi bạn được tính ngay với giá bán buôn. </Text>
      <Text>- Kiểu dáng và màu sắc theo nhà sản xuất, một số mặt hàng đặc biệt sẽ theo yêu cầu của khách hàng.</Text>
      <Text>- Không áp dụng giá chung cho tất cả mặt hàng, tùy loại mặt hàng, giá bán sỉ sẽ tùy vào số lượng mua hàng.</Text>
      <Text>- Quý khách mua bao nhiêu chúng tôi sẽ báo giá bấy nhiêu, tùy theo từng lựa chọn của mỗi Quý khách.</Text>
      <Title level={5} className="uppercase">2. CHÍNH SÁCH GIÁ BÁN SỈ</Title>
      <Text>- Chính sách giá bán sỉ được áp dụng cho khách hàng mua số lượng càng lớn thì giá càng tốt hơn.</Text>
      <Text>- Quý khách mua số lượng nhiều hơn hoặc khách từng mua sỉ và lâu năm có thể liên hệ trực tiếp nhận báo giá cùng với nhiều ưu đãi đặc biệt.</Text>
      <Title level={5} className="uppercase">3. QUYỀN LỢI CỦA KHÁCH MUA SỈ</Title>
      <Text>- Chọn hàng trực tiếp tránh các mặt hàng lỗi - hư - rách do vận chuyển & lỗi của nhà sản xuất. Nếu Quý khách hàng ở Tỉnh khác hoặc ở Hà Nội & TP.HCM nhưng không có thời gian đến chúng tôi chọn mẫu thì chúng tôi sẽ hỗ trợ chụp hình thực tế từng món hàng quý khách đặt hoặc trực tuyến video cho quý khách kiểm tra trước khi đặt hàng</Text>
      <Text>- Chúng tôi sẽ thông tin cho Quý khách khi có sản phẩm mới.</Text>
      <Text>- Tất cả sản phẩm lấy tại hệ thống chúng tôi đều được cung cấp hình ảnh thực tế (nếu có nhu cầu).</Text>
      <Text>- Miễn phí giao hàng tận nơi cho tất cả khách nội thành TP.HCM.</Text>
      <Title level={5} className="uppercase">4. THANH TOÁN</Title>
      <Text>- Quý khách vui lòng thanh toán ngay khi giao hàng.</Text>
      <Text>- Với đơn hàng từ 20 triệu đồng trở lên và lấy hóa đơn, Quý khách được chuyển khoản khi thanh toán.</Text>
      <Text>- Quý khách vui lòng xem thêm phần chính sách vận chuyển để biết thêm chi tiết về thanh toán phí vận chuyển.</Text>
    </Space>
  )
}

export default StockPolicies