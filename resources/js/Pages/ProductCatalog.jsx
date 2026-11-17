import { useMemo, useState } from "react";
import { Head } from "@inertiajs/react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import SiteFooter from "../Components/SiteFooter";
import SiteHeader from "../Components/SiteHeader";
import { products } from "../data/products";

const categories = [
  "CEMENT & MORTAR",
  "STEEL & METAL",
  "PAINT & COATING",
  "TILES & FLOORING",
  "ROOFING SYSTEMS",
  "PLUMBING & VALVES",
  "FINISHING MATERIALS",
];

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        [product.title, product.brand, product.category, product.desc]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F7F6F3] font-sans text-neutral-900">
      <Head title="Katalog Produk" />
      <SiteHeader activePage="products" />

      <section className="bg-[#141414] py-8 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#F3653B]">
            Architectural Material Specifications
          </span>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Materials for Better Spaces</h1>
              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-neutral-400">
                Katalog material berspesifikasi teknik tinggi untuk kebutuhan struktural,
                fasad, MEP, dan arsitektural.
              </p>
            </div>
            <label className="flex w-full items-center gap-2 rounded border border-neutral-700 bg-[#1D1D1D] px-3 py-2.5 md:max-w-sm">
              <Search className="h-4 w-4 shrink-0 text-neutral-500" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari material, grade baja, tipe semen..."
                className="w-full bg-transparent text-xs text-white placeholder-neutral-500 outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12">
        <aside className="h-fit rounded-md border border-neutral-200 bg-white p-5 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between border-b border-neutral-100 pb-3 text-xs font-semibold uppercase tracking-wide">
            <span>Filter Material</span>
            <SlidersHorizontal className="h-4 w-4 text-[#F3653B]" />
          </div>
          <h2 className="mb-2.5 text-[10px] font-bold uppercase tracking-wider text-[#E9532E]">Kategori Utama</h2>
          <ul className="space-y-2">
            <li>
              <button
                type="button"
                onClick={() => setSelectedCategory("")}
                aria-pressed={!selectedCategory}
                className={`text-left text-xs ${!selectedCategory ? "font-semibold text-[#E9532E]" : "text-neutral-600 hover:text-neutral-950"}`}
              >
                Semua Kategori ({products.length})
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`text-left text-xs ${selectedCategory === category ? "font-semibold text-[#E9532E]" : "text-neutral-600 hover:text-neutral-950"}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory("");
            }}
            className="mt-6 w-full rounded border border-neutral-200 bg-[#F7F6F3] py-2 text-xs text-neutral-600 transition hover:bg-neutral-100"
          >
            Reset Filter
          </button>
        </aside>

        <section className="lg:col-span-9" aria-label="Daftar produk">
          <div className="mb-4 flex flex-col justify-between gap-2 border border-neutral-200 bg-white px-4 py-3 text-xs text-neutral-500 sm:flex-row sm:items-center">
            <span>
              Menampilkan {filteredProducts.length} dari {products.length} produk contoh
            </span>
            <span>Urutkan: Rekomendasi Proyek</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-neutral-200 bg-white px-5 py-12 text-center">
              <p className="font-semibold text-neutral-800">Produk tidak ditemukan</p>
              <p className="mt-1 text-sm text-neutral-500">Coba ubah kata pencarian atau filter kategori.</p>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
