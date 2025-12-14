import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { Dialog } from '@/components/dialog'
import InvoiceFile from '@/assets/invoice.pdf'

export default function BillingCard() {
  const handleDownload = async () => {
    const response = await fetch(
      { InvoiceFile },
      {
        method: 'GET',
      }
    )
    const blob = await response.blob()

    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'invoice.pdf'
    a.click()
    window.URL.revokeObjectURL(url)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
      <Card className=' border-none bg-[#FAFAF9] p-0 shadow-none'>
        <CardContent className='space-y-3 p-3'>
          <CardTitle className='text-sm font-medium'>Plan Details</CardTitle>
          <div className='flex justify-between text-sm font-normal'>
            <span className='text-stone-700'>Plan</span>
            <span className='px-2 py-1 bg-black text-white text-xs rounded-full'>
              Professional
            </span>
          </div>

          <div className='flex justify-between text-sm font-normal'>
            <span className='text-stone-700'>Status</span>
            <span className='text-green-500'>Active</span>
          </div>

          <div className='flex justify-between text-sm font-normal'>
            <span className='text-stone-700'>Next Billing</span>
            <span className='text-sm text-stone-700'>Jan 15, 2025</span>
          </div>

          <div className='flex justify-between text-sm'>
            <span className='text-stone-700'>Amount</span>
            <span className='font-semibold text-stone-900'>$29.00</span>
          </div>
        </CardContent>
      </Card>

      <Card className=' border-none bg-[#FAFAF9] p-0 shadow-none'>
        <CardContent className='space-y-3 p-3'>
          <CardTitle className='text-sm font-medium text-stone-900'>
            Usage
          </CardTitle>
          <div className='flex justify-between text-sm'>
            <span className='text-stone-700'>Projects</span>
            <span className='text-stone-700'>8 / unlimited</span>
          </div>

          <div className='flex justify-between text-sm'>
            <span className='text-stone-700'>Storage</span>
            <span>45GB / 100GB</span>
          </div>

          <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden'>
            <div className='h-full bg-black w-[45%]' />
          </div>
        </CardContent>
      </Card>

      <Card className=' border-none bg-[#FAFAF9] p-0 shadow-none'>
        <CardContent className='space-y-3 p-3'>
          <CardTitle className='text-sm font-medium text-stone-900'>
            Settings & Actions
          </CardTitle>
          <div className='flex items-center justify-between'>
            <span className='text-stone-700 text-sm'>Auto-renewal</span>
            <Switch defaultChecked className='cursor-pointer' />
          </div>
          <Dialog />
          <Button
            variant='outline'
            className='w-full bg-[##F5F5F4] cursor-pointer'
            onClick={handleDownload}
          >
            <Download /> Download Invoice
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
