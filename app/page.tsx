"use client"
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-teal-500" >
      
    <h1>Home</h1>

    {/* <Button variant='outline'>Click</Button> */}
    <Products/>
    </main>
  );
}
