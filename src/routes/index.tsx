import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/utils'
import { DefaultLayout } from '@/layouts'
import { Blog } from '@/pages'

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <DefaultLayout />,
    children: [{}]
  },
  {
    path: PATH.blog,
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Blog /> 
      }
    ]
  }
])
