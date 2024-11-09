import { useEffect } from 'react'

import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import { userApi } from '@/apis' 

import { useApi } from '@/hooks'

import { useAuthStore } from '@/stores'

import { Header, Footer } from './partials'

const { Content } = Layout

export const DefaultLayout = () => {
  const { setCurrentUser } = useAuthStore()
  const { callApi: callApiGetCurrentUser } = useApi<void>()

  const handleGetCurrentUser = () => {
    callApiGetCurrentUser(async () => {
      const { data } = await userApi.getCurrentUser()
      if (data) {
        setCurrentUser(data)
      }
    })
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [])
  return (
    <Layout className='w-full max-w-full min-h-screen overflow-hidden bg-white'>
      <Header />
      <Content className='text-center min-h-[400px] text-black'>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}
