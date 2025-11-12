import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell, ShoppingCart } from "lucide-react";
export default function CardOrder() {
  return (
    <Card className='w-full flex h-full flex-col geist-400'>
      <CardHeader>
        <CardTitle>Orders Overview</CardTitle>
        <CardDescription>Last Campaign Performance</CardDescription>
      </CardHeader>
      <CardContent className='flex items-start'>
        <Bell size={18} color='green' />
        <div className='ml-3'>
          <p className='text-sm roboto-400'>$2.400, Design Changes</p>
          <CardDescription className='text-xs'>22 DEC 7:20 PM</CardDescription>
        </div>
      </CardContent>
      <CardFooter className='items-start mt-auto flex-col gap-2'>
        <div className='flex items-center'>
          <ShoppingCart size={18} color='red' />
          <div className='ml-3'>
            <p className='text-sm roboto-400'>New Order #1832412</p>
            <CardDescription className='text-xs'>
              22 DEC 7:20 PM
            </CardDescription>
          </div>
        </div>
        <div className='bg-green-50 text-green-500 text-xs rounded-full px-2 py-1 w-fit'>
          +24% this month
        </div>
      </CardFooter>
    </Card>
  );
}
