import { createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/utils'
import { DefaultLayout } from '@/layouts'
import { CollabPolicies, ExchangePolicies, MembershipPolicies, PaymentPolicies, PurchasePolicies, SecurityPolicies, StockPolicies,
        Collaborator, ExchangeReturn, Gift, Inquiries, Payment, RetailAdvice, Size} from '@/components'

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <DefaultLayout />,
    children: [{
      path: PATH.collab_pol,
      element: <CollabPolicies />,
      children: [{}]
    },
    {
      path: PATH.exchange_pol,
      element: <ExchangePolicies />,
      children: [{}]
    },
    {
      path: PATH.membership_pol,
      element: <MembershipPolicies />,
      children: [{}]
    },
    {
      path: PATH.payment_pol,
      element: <PaymentPolicies />,
      children: [{}]
    },
    {
      path: PATH.purchase_pol,
      element: <PurchasePolicies />,
      children: [{}]
    },
    {
      path: PATH.security_pol,
      element: <SecurityPolicies />,
      children: [{}]
    },
    {
      path: PATH.stock_pol,
      element: <StockPolicies />,
      children: [{}]
    },
    {
      path: PATH.collab_sup,
      element: <Collaborator />,
      children: [{}]
    },
    {
      path: PATH.exchange_sup,
      element: <ExchangeReturn />,
      children: [{}]
    },
    {
      path: PATH.gift_sup,
      element: <Gift />,
      children: [{}]
    },
    {
      path: PATH.inquiries_sup,
      element: <Inquiries />,
      children: [{}]
    },
    {
      path: PATH.payment_sup,
      element: <Payment />,
      children: [{}]
    },
    {
      path: PATH.retail_sup,
      element: <RetailAdvice />,
      children: [{}]
    },
    {
      path: PATH.size_sup,
      element: <Size />,
      children: [{}]
    }]
  }
])
