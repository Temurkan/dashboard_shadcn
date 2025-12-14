import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, CreditCard, Loader2, CheckCircle } from "lucide-react" 

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"


export default function BillingSubscript() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  const plans = {
    Basic: { price: 9, title: "Basic", description: "Individuals getting started" },
    Professional: { price: 29, title: "Professional", description: "Growing teams and businesses" },
    Enterprise: { price: 99, title: "Enterprise", description: "Large organizations with advanced needs" },
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsDrawerOpen(true);
    setIsSuccess(false);
    setIsLoading(false);
  };

  const handleConfirmSubscription = () => {
    setIsLoading(true); 
    

    setTimeout(() => {
      setIsLoading(false); 
      setIsSuccess(true); 
      setTimeout(() => {
        setIsDrawerOpen(false);
        setSelectedPlan(null); 
        setIsSuccess(false); 
      }, 1000); 
      
    }, 1500); 
  };

  return (
    <div className="w-full flex justify-between gap-6 mt-6">

      <Card className="w-full p-6 border rounded-md">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-lg font-semibold text-stone-900">Basic</CardTitle>
          <div className="text-4xl font-bold pt-2">$9<span className="text-xl font-normal text-stone-500">/month</span></div>
          <p className="text-stone-600 font-normal text-sm pt-2">Perfect for individuals getting started</p>
        </CardHeader>
        <CardContent className="mt-7 space-y-3 p-0 text-sm font-normal">
          <Feature text="Up to 5 projects" enabled />
          <Feature text="10GB storage" enabled />
          <Feature text="Basic support" enabled />
          <Feature text="Advanced analytics" />
          <Feature text="Team collaboration" />
          <Feature text="Priority support" />
          <Button
            variant="outline"
            className="w-full bg-[#F5F5F4] cursor-pointer"
            onClick={() => handleSelectPlan(plans.Basic)}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full relative p-6 border-2 border-black rounded-md">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-normal px-2 py-1 rounded-full shadow">
          Most Popular
        </div>
        <CardHeader className="text-center p-0">
          <CardTitle className="text-lg font-semibold text-stone-900">Professional</CardTitle>
          <div className="text-4xl font-bold pt-2">$29<span className="text-xl font-normal text-stone-500">/month</span></div>
          <p className="text-stone-600 font-normal text-sm pt-2">Best for growing teams and businesses</p>
        </CardHeader>
        <CardContent className="mt-7 space-y-3 p-0 text-sm font-normal">
          <Feature text="Unlimited projects" enabled />
          <Feature text="100GB storage" enabled />
          <Feature text="Priority support" enabled />
          <Feature text="Advanced analytics" enabled />
          <Feature text="Team collaboration" enabled />
          <Feature text="Priority support" />
          <Button
            variant="gradient"
            className="w-full cursor-pointer"
            onClick={() => handleSelectPlan(plans.Professional)}
          >
            Upgrade Now
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full p-6 border rounded-md">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-lg font-semibold text-stone-900">Enterprise</CardTitle>
          <div className="text-4xl font-bold pt-2">$99<span className="text-xl font-normal text-stone-500">/month</span></div>
          <p className="text-stone-600 font-normal text-sm pt-2">For large organizations with advanced needs</p>
        </CardHeader>
        <CardContent className="mt-7 space-y-3 p-0 text-sm font-normal">
          <Feature text="Unlimited projects" enabled />
          <Feature text="Unlimited storage" enabled />
          <Feature text="24/7 premium support" enabled />
          <Feature text="Advanced analytics" enabled />
          <Feature text="Team collaboration" enabled />
          <Feature text="Full API access" enabled />
          <Button
            variant="outline"
            className="w-full bg-[#F5F5F4] cursor-pointer"
            onClick={() => handleSelectPlan(plans.Enterprise)}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-md mx-auto h-fit">
          {selectedPlan && (
            <div className="w-full">
              <div className="p-4 overflow-y-auto">
                <DrawerHeader className="text-center">
                  <DrawerTitle className="text-3xl font-bold">{selectedPlan.title} Subscription</DrawerTitle>
                  <DrawerDescription className="text-lg text-stone-500 mt-2">
                    Confirm your payment details
                  </DrawerDescription>
                </DrawerHeader>

                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between text-2xl font-semibold border-b pb-2">
                    <span>Total Due:</span>
                    <span className="text-stone-900">${selectedPlan.price}/month</span>
                  </div>

                  <p className="text-sm text-stone-600">
                    You are subscribing to the **{selectedPlan.title}** plan. Click confirm to finalize the payment and start immediately.
                  </p>


                  <div className="p-3 bg-stone-50 border rounded-lg flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-indigo-500"/>
                      <span className="text-sm font-medium">Saved Card: **** **** **** 4242</span>
                  </div>
                </div>
              </div>


              <DrawerFooter className="sticky bottom-0 bg-white border-t p-4">
                <Button
                  onClick={handleConfirmSubscription}
                  className="w-full h-12 text-lg"
                  disabled={isLoading || isSuccess} 
                >
                  {isSuccess ? (
                    <span className="flex items-center justify-center text-green-500 transition-all duration-300">
                      <CheckCircle className="mr-2 h-6 w-6" />
                      Success!
                    </span>
                  ) : isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Subscription"
                  )}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" disabled={isLoading || isSuccess}>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>

    </div>
  )
}




function Feature({ text, enabled }) {
  return (
    <div className="flex items-center gap-2">
      {enabled ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-gray-400" />
      )}
      <span className={enabled ? "text-stone-900" : "text-stone-400"}>
        {text}
      </span>
    </div>
  )
}