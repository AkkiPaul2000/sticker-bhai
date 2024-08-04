/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uk3TW2ipeCA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sticker } from 'lucide-react';
import { signIn, useSession } from "next-auth/react"


export default function Profile() {
const {status,data:session}=useSession()
if(status==="unauthenticated")return(
<div className="profileBhai ">
  <div style={{display:"flex",alignContent:"center",justifyContent:'space-around',color:'Pink'}}>

    <span style={{textAlign:"center",alignContent:"center"}}>SignIn to see your profile</span> <Button onClick={()=>signIn('google')}>Sign here with Google</Button>
    </div>
    </div>
)
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:gap-6 xl:gap-10">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex items-center space-x-4">
          <Avatar className="w-30 h-30">
          <Image src="/images/avatar.jpg" alt="Avatar" width="200" height="200" className="rounded-full" /> 

          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500 dark:text-gray-400">www.johndoe@gmail.com</p>
          </div>
        </div>
        
      </div>
      <div className="space-y-4">
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value="www.johndoe@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value="XXXXXXXXXXX" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <div className="space-y-4">
          <Card className="">
            <CardContent className="flex items-center space-x-4 p-6">
              <Sticker className="w-8 h-8" />
              <div className="grid items-center grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Bought This</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sticker 1</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4 p-6">
              <Sticker className="w-8 h-8" />
              <div className="grid items-center grid-rows-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Bought This</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sticker 2</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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