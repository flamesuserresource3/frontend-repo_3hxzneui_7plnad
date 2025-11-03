import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <section id="sale" className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-black to-slate-800 p-8 sm:p-12 text-white overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Mid‑Season Sale</h3>
                  <p className="mt-2 text-white/80">Save up to 40% on selected styles — limited time only.</p>
                </div>
                <a href="#new" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-black font-medium hover:bg-white/90">
                  Shop the Sale
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
