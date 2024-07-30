import React from 'react'
import Logo from "@/components/logosinfondo.png"
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <header className='bg-[#fb3d27] '> 
        <nav className='flex w-full max-w-5xl m-auto h-[12vh] items-center px-4 justify-between '>
            <div>
                <Image src={Logo} alt='Logo DeportivoPizza' width={70} height={70} />
            </div>
            <ul className='flex gap-4'>
                <li>
                    <Link href={"/"} className='font-semibold'>Inicio</Link>
                </li>
                <li>
                    <Link href={"/menu"} className='font-semibold'>Menú</Link>
                </li>
                <li>
                    <Link href={"/promociones"} className='font-semibold'>Promociones</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header