import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Download } from 'lucide-react'
import { Badge } from './ui/badge'
import InvoiceFile from '@/assets/invoice.pdf'
import { Button } from './ui/button'

const invoices = [
  {
    data: 'Dec 15,2024',
    description: 'Professional Plan - Monthly',
    totalAmount: '$29.00',
    status: 'Piad',
    action: <Download className='w-4' />,
  },
  {
    data: 'Nov 15,2024',
    description: 'Professional Plan - Monthly',
    totalAmount: '$29.00',
    status: 'Piad',
    action: <Download className='w-4' />,
  },
  {
    data: 'Oct 15,2024',
    description: 'Professional Plan - Monthly',
    totalAmount: '$29.00',
    status: 'Piad',
    action: <Download className='w-4' />,
  },
]

export default function BillingHistory() {
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
    <div className=' w-full border rounded-xl mt-7'>
      <h2 className='px-6 pt-6 pb-2 text-lg font-semibold text-stone-900'>
        Billing History
      </h2>
      <Table>
        <TableHeader>
          <TableRow className='bg-[#FAFAF9]'>
            <TableHead className='pl-6 text-stone-500 text-xs font-normal'>
              DATE
            </TableHead>
            <TableHead className='text-stone-500 text-xs font-normal'>
              DESCRIPTION
            </TableHead>
            <TableHead className='text-stone-500 text-xs font-normal'>
              AMOUNT
            </TableHead>
            <TableHead className='text-stone-500 text-xs font-normal'>
              STATUS
            </TableHead>
            <TableHead className='text-stone-500 text-xs font-normal'>
              ACTION
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className='pl-6 py-6'>{invoice.data}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>
                <Badge className='bg-[#F0FDF4] text-green-500'>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  variant={'outline'}
                  onClick={handleDownload}
                  className='w-8 h-8 flex items-center justify-center border rounded-md cursor-pointer'
                >
                  {invoice.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
