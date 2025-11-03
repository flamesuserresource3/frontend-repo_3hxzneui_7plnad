import { useState } from 'react';
import { ShoppingCart, Menu, X, Shirt } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-black text-white">
              <Shirt className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">StyleSphere</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#new" className="hover:text-black transition-colors">New Arrivals</a>
            <a href="#men" className="hover:text-black transition-colors">Men</a>
            <a href="#women" className="hover:text-black transition-colors">Women</a>
            <a href="#sale" className="text-red-600 font-medium">Sale</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-xs">2</span>
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <nav className="flex flex-col gap-2">
              <a href="#new" className="px-2 py-2 rounded hover:bg-slate-100">New Arrivals</a>
              <a href="#men" className="px-2 py-2 rounded hover:bg-slate-100">Men</a>
              <a href="#women" className="px-2 py-2 rounded hover:bg-slate-100">Women</a>
              <a href="#sale" className="px-2 py-2 rounded hover:bg-slate-100 text-red-600 font-medium">Sale</a>
              <button className="mt-2 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                <span className="ml-1 inline-flex items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-xs">2</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
