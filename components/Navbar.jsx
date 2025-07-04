'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white dark:bg-zinc-900">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-primary">ZeroDocs</Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
