"use client"
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 pb-10" >
    <Products/>
    </main>
  );
}
