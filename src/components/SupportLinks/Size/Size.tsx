import { Space, Typography } from "antd"
import { useEffect } from "react"
const { Title, Text } = Typography
const Size = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <Space direction="vertical" className="mx-5 w-1200 max-w-7xl text-1px text-black pb-5 ml-12 text-left gap-4">
      <Title level={4} className="uppercase">Hướng dẫn chọn size</Title>
      <Text>Một số bảng size chuẩn mà Bean muốn gữi bến bạn.</Text>
      <Title level={5} className="uppercase">+ ÁO POLO</Title>
      <img src="//bizweb.dktcdn.net/100/451/884/files/img-size.png?v=1650034072679" alt="size-Ao-Polo" />
      <br />
      <Title level={5} className="uppercase">+ ÁO Cotton</Title>
      <img src="//bizweb.dktcdn.net/100/451/884/files/img-size2.png?v=1650034124971" alt="size-Ao-Cotton" />
      <br />
      <Title level={5} className="uppercase">+ ÁO phông</Title>
      <img src="//bizweb.dktcdn.net/100/451/884/files/img-size3-min.png?v=1650034166187" alt="size-Ao-Phong" />
      <br />
    </Space>
  )
}
export default Size