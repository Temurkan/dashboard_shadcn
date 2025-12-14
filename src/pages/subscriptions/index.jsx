import BillingCard from '@/components/billingCard'
import BillingHistory from '@/components/billingHistory'
import BillingSubscript from '@/components/billingSubscript'
import React from 'react'

export default function Subscriptions() {
  return (
    <div className='p-6 w-full'>
      <div className='bg-white w-full p-6 rounded-2xl'>
        <h2 className='text-xl font-semibold'>Subscriptions</h2>
        <p className='text-sm text-[#57534E] font-normal pt-1 '>
          Manage your billing plans and subscription settings
        </p>
        <hr className='mt-4' />
        <h2 className='text-lg font-semibold mt-6'>Current Subscription</h2>
        <BillingCard />
        <BillingSubscript />
        <BillingHistory />
      </div>
    </div>
  )
}
