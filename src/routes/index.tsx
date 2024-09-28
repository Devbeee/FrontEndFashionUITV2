import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/utils'
import { DefaultLayout } from '@/layouts'

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <DefaultLayout />,
    children: [{}]
  }
])
