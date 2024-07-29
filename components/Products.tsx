/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GvMYZg77zfP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Products() {
  return (
    <div className="flex gap-8 p-4 md:p-8">
        {/* COMMENTED FILTER */}
      {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-base font-medium mb-2">Categories</h3>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="category-1" />
                Clothing
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="category-2" />
                Electronics
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="category-3" />
                Home & Garden
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="category-4" />
                Beauty
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Price Range</h3>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="price-range-1" />
                $0 - $50
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="price-range-2" />
                $50 - $100
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="price-range-3" />
                $100 - $200
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="price-range-4" />
                $200+
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Ratings</h3>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="rating-4" />
                4 stars and above
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="rating-3" />
                3 stars and above
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="rating-2" />
                2 stars and above
              </Label>
              <Label className="flex items-center gap-2 cursor-pointer">
                <Checkbox id="rating-1" />
                1 star and above
              </Label>
            </div>
          </div>
        </div>
      </div> */}
    
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[0,1,2,3,4,5,6,7].map((prod)=>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-l">
        <Image src="/images/prodBg.jpg" alt="Product Background" width={800} height={600} /> 

          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Wireless Headphones</h3>
            <div className="flex items-center gap-2 mb-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-sm text-gray-500 dark:text-gray-400">(4.2)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">$99.99</span>
              <Button size="sm">Buy Now</Button>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}