import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const Collaborator = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">chương trình cộng tác viên</Title>
      <Text><b>Kiểu chính sách</b> với 1 trong 2 kiểu chính sách có thể áp dụng là:</Text>
      <Text><b>Chính sách hoa hồng chung:</b> là chính sách áp dụng cho toàn bộ sản phẩm trên website ngoại trừ đi các sản phẩm có mức hoa hồng đặc biệt thiết lập tại mục “Chính sách hoa hồng theo sản phẩm”. Khi đối tác giới thiệu các đơn hàng chỉ chứa sản phẩm thông thường (không nằm trong danh sách sản phẩm có hoa hồng đặc biệt) thì sẽ được tính toán mức hoa hồng như chính sách chung. Để thiết lập chính sách hoa hồng chung, bạn cần chọn:</Text>
      <Text>% hoa hồng theo giá trị đơn hàng</Text>
      <Text>Số tiền cố định theo mỗi đơn hàng</Text>
      <Text>Và <b>Giá trị đơn hàng áp dụng</b> theo:</Text>
      <Text>Tổng giá trị đơn hàng không có phí vận chuyển: hoa hồng của đối tác được tính trên tổng giá trị đơn hàng trừ đi phí vận chuyển</Text>
      <Text>Tổng giá trị đơn hàng bao gồm phí vận chuyển: Hoa hồng của đối tác sẽ được tính trên tổng giá trị đơn hàng có bao gồm phí vận chuyển</Text>
      <Text><b>Chính sách hoa hồng theo sản phẩm</b> (Tùy chọn): là chính sách chỉ áp dụng cho 1 danh sách sản phẩm hay danh mục sản phẩm tùy chọn. Khi đơn hàng chỉ chứa các sản phẩm có mức hoa hồng đặc biệt thì sẽ áp dụng mức hoa hồng được thiết lập cho từng sản phẩm để tính ra mức hoa hồng cho đối tác. Để thiết lập chính sách hoa hồng theo sản phẩm bạn cần:</Text>
      <Text><b>Lựa chọn sản phẩm</b>, bạn có thể chọn đích danh 1 sản phẩm cụ thể hoặc chọn cả danh mục sản phẩm</Text>
      <Text>Chọn loại <b>Hoa hồng áp dụng:</b> Theo phần trăm (%) hoặc Theo số tiền (đ)</Text>
      <Text>Tiếp theo, bạn chọn <b>Xác nhận</b> để hoàn tất thiết lập chính sách hoa hồng cho sản phẩm</Text>
      <Text>Sau khi<b> Xác nhận</b>, sản phẩm / danh mục sản phẩm thuộc chính sách hoa hồng theo sản phẩm sẽ hiển thị ở mục <b>Danh sách hoa hồng theo sản phẩm</b></Text>
    </Space>
  )
}

export default Collaborator