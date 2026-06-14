import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '作品', href: '#projects' },
  { label: '优势', href: '#skills' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-cn">纪彤</span>
          <span className="navbar__logo-en">JI TONG</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:3036404446@qq.com" className="navbar__cta">
          联系我
        </a>
      </div>
    </nav>
  )
}
