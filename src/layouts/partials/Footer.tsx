import { Link } from 'react-router-dom'

import { Layout, Row, Col, Typography, Space } from 'antd'

import { contactInfo, footerInfo, socialMedias } from '@/utils'

const { Footer: AntFooter } = Layout
const { Title, Text } = Typography

export function Footer() {
  return (
    <AntFooter className='bg-blue-cyan text-white py-10'>
      <Row justify='space-around' className='w-full'>
        <Col span={5}>
          <Title level={3} style={{ color: 'white' }}>
            THÔNG TIN CHUNG
          </Title>
          <Text className='text-white'>
            Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mạng lại giá trị tốt nhất
          </Text>
          {contactInfo.map((contactInfoItem) => (
            <div className='mt-2 text-white' key={contactInfoItem.title}>
              <strong>{contactInfoItem.title} </strong>
              <span>
                <Link to={contactInfoItem.to} className='text-yellow font-semibold hover:opacity-90 hover:text-yellow'>
                  {contactInfoItem.text}
                </Link>
              </span>
            </div>
          ))}

          <Space>
            {socialMedias.map((socialItem) => (
              <span className='text-2xl border-white px-1' key={socialItem.to}>
                <Link to={socialItem.to}>{socialItem.icon}</Link>
              </span>
            ))}
          </Space>
        </Col>

        <Col span={5}>
          <Title level={3} style={{ color: 'white' }}>
            BÀI VIẾT MỚI
          </Title>
          <div className='space-y-4'>
            <Row gutter={8} className='hover:text-yellow-400'>
              <Link to=''>
                <Col>
                  <img
                    src='https://bizweb.dktcdn.net/100/451/884/articles/4-kieu-trang-phuc-demin-hot-nhat.jpg?v=1649173718847'
                    alt='thumb'
                    className='w-20 h-14'
                  />
                </Col>
                <Col>
                  <Text className='text-white'>
                    4 kiểu trang phục denim đang hot nhất hack mọi độ tuổi cho các nàng
                  </Text>
                  <br />
                  <Text className='text-gray-400'>05/04/2022</Text>
                </Col>
              </Link>
            </Row>
          </div>
        </Col>

        {footerInfo.map((infoItem) => (
          <Col span={4} key={infoItem.title}>
            <Title level={3} style={{ color: 'white' }}>
              {infoItem.title}
            </Title>
            <ul className='list-none p-0 space-y-2'>
              {infoItem.data.map((infoItemDetail) => (
                <li key={infoItemDetail.text}>
                  <Link to={infoItemDetail.to} className='hover:text-yellow'>
                    {infoItemDetail.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <div className='text-center text-gray-400'>© Bản quyền thuộc về Mr. Bean | Cung cấp bởi Sapo</div>
    </AntFooter>
  )
}
