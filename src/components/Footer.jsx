export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-black" href="#">Men</a></li>
              <li><a className="hover:text-black" href="#">Women</a></li>
              <li><a className="hover:text-black" href="#">Kids</a></li>
              <li><a className="hover:text-black" href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-black" href="#">About</a></li>
              <li><a className="hover:text-black" href="#">Careers</a></li>
              <li><a className="hover:text-black" href="#">Press</a></li>
              <li><a className="hover:text-black" href="#">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-black" href="#">Shipping</a></li>
              <li><a className="hover:text-black" href="#">Returns</a></li>
              <li><a className="hover:text-black" href="#">FAQ</a></li>
              <li><a className="hover:text-black" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Get updates</h4>
            <p className="text-sm text-slate-600">Join our newsletter for drops and deals.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button type="submit" className="rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} StyleSphere. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-black">Terms</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
