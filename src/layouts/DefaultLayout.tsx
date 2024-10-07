import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import { Header, Footer } from './partials'

const { Content } = Layout

export const DefaultLayout = () => {
  return (
    <Layout className='w-full max-w-full bg-white'>
      <Header/>
      <Content className='text-center min-h-[120px] text-white'>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}
