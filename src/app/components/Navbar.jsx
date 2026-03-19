'use client'

import Link from 'next/link'
import { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tyres', label: 'Tyres' },
  { href: '/batteries', label: 'Batteries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full z-50 bg-black border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

        {/* Logo */}
        <Link href='/' className='hover:opacity-80 transition-opacity'>
  <Image
    src='/logo 2.jpg'
    alt='Nairobi Tyres Logo'
    width={100}
    height={20}
    className='object-contain rounded'
    priority
  />
</Link>

        {/* Desktop Nav Links */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side — Cart + CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <Link href='/cart' className='relative text-gray-300 hover:text-orange-500 transition-colors'>
            <RiShoppingCartLine className='w-6 h-6' />
            <span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold'>
              0
            </span>
          </Link>
          <Link
            href='/tyres'
            className='bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors'
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden text-gray-300 hover:text-white transition-colors'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          {menuOpen ? <HiX className='w-7 h-7' /> : <HiMenuAlt3 className='w-7 h-7' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-gray-300 hover:text-orange-500 transition-colors text-base font-medium'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/tyres'
            className='bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors text-center mt-2'
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar