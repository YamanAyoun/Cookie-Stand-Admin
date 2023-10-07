import React from "react";
import Link from 'next/link';

function Header() {
  return (
    <header>
       
      <div className="bg-emerald-600">
      
        <Link href="/">
          Return to Main page
        </Link>
      
        <p className="text-center text-4xl p-5 text-black">Cookies Stand Admin</p>
      </div>
    </header>
  );
}

export default Header;
