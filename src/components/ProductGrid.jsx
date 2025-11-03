import { Star } from 'lucide-react';

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium text-slate-900">{product.name}</h3>
            <p className="text-sm text-slate-500">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">${product.price}</p>
            <div className="flex items-center justify-end gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
        <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90">
          Add to cart
        </button>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: 'Relaxed Fit Tee',
    category: 'Women',
    price: 28,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    category: 'Men',
    price: 79,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Everyday Chinos',
    category: 'Men',
    price: 59,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Linen Summer Dress',
    category: 'Women',
    price: 69,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1520975693416-35f0e4e1d5b1?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Athleisure Hoodie',
    category: 'Unisex',
    price: 65,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1549032305-0c0b1f30959f?q=80&w=1740&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Minimalist Sneakers',
    category: 'Unisex',
    price: 89,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="new" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">New arrivals</h2>
            <p className="text-slate-600 mt-1">Fresh drops you will love.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-medium text-slate-700 hover:text-black">
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
