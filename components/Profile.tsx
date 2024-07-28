/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uk3TW2ipeCA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Profile() {
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:gap-6 xl:gap-10">
      <div className="space-y-4 lg:col-span-2">
        <div className="flex items-center space-x-4">
          <Avatar className="w-30 h-30">
          <Image src="/images/avatar.jpg" alt="Avatar" width="200" height="200" className="rounded-full" /> 

          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Alice Johnson</h1>
            <p className="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Passionate about building accessible and inclusive web experiences.
        </p>
      </div>
      <div className="space-y-4">
        <Card>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value="Alice Johnson" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Enter your bio" className="min-h-[100px]" />
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
          <Card>
            <CardContent className="flex items-center space-x-4">
              <CalendarIcon className="w-6 h-6" />
              <div className="grid items-center grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled a meeting</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4">
              <MessageCircleIcon className="w-6 h-6" />
              <div className="grid items-center grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Sent a message</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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