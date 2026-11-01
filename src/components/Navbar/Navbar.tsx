import React from 'react';
import { Menu, X } from 'lucide-react';
import { businessConfig } from '../../config/business';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="#home" className="flex items-center space-x-2" onClick={close}>
          <img src={businessConfig.logo} alt="Logo" className="h-8 w-auto" />
          <span className="font-heading text-xl text-primary">{businessConfig.businessName}</span>
        </a>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-primary transition-colors" onClick={close}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary px-4 py-2 rounded hover:bg-accent transition" onClick={close}>
              Book Home Visit
            </a>
          </li>
        </ul>
        {/* Mobile */}
        <button className="md:hidden" onClick={toggle} aria-label="Menu toggle">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {open && (
          <div className="absolute inset-x-0 top-full left-0 right-0 bg-white shadow-md md:hidden">
            <ul className="flex flex-col p-4 space-y-4">
              {sections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block hover:text-primary transition-colors" onClick={close}>
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="block btn-primary text-center" onClick={close}>
                  Book Home Visit
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
