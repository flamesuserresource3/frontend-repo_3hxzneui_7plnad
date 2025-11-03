import { Truck, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-xs font-medium">New Collection</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Elevate your everyday style with premium essentials
            </h1>
            <p className="text-slate-600 text-lg">
              Discover curated pieces designed for comfort and confidence. Crafted with sustainable fabrics and timeless silhouettes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#new" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-black/90">
                Shop New Arrivals
              </a>
              <a href="#women" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-900 font-medium hover:bg-slate-50">
                Explore Women
              </a>
            </div>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-slate-800" />
                <div>
                  <dt className="text-sm font-semibold">Free shipping</dt>
                  <dd className="text-xs text-slate-500">On orders over $50</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-slate-800" />
                <div>
                  <dt className="text-sm font-semibold">Secure checkout</dt>
                  <dd className="text-xs text-slate-500">SSL encrypted</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-slate-800" />
                <div>
                  <dt className="text-sm font-semibold">4.9/5 rating</dt>
                  <dd className="text-xs text-slate-500">Trusted by customers</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1740&auto=format&fit=crop"
                alt="Model wearing minimalist clothing"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl bg-white shadow-lg p-4">
              <p className="text-sm font-medium">“Beautiful quality and fit.”</p>
              <p className="text-xs text-slate-500">— Mira K.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
