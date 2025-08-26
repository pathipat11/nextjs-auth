"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3>Welcome to home page</h3>
        <hr className="my-3" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laboriosam fugit dicta obcaecati minima debitis cupiditate illum nam vero iste, ut at, ad dignissimos tempora quasi unde beatae eum pariatur.</p>
      </div>
    </div>
  );
}
