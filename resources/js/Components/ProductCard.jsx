import { Link } from "@inertiajs/react";
import { formatProductPrice } from "../data/products";

export default function ProductCard({ product, featured = false }) {
  return (
    <article
      className={`flex flex-col justify-between rounded-lg border bg-white ${
        featured
          ? "border-neutral-200 p-5 shadow-xs"
          : "border-neutral-200 p-4 transition hover:border-[#EA580C]/60"
      }`}
    >
      <div>
        <div
          className={`relative mb-4 flex items-center justify-center rounded bg-[#EAECE9] px-3 text-center font-mono text-[10px] text-neutral-500 ${
            featured ? "h-40" : "h-32"
          }`}
        >
          <span className="absolute left-2.5 top-2.5 rounded bg-[#14532D] px-2 py-1 text-[9px] font-bold tracking-wider text-white">
            {product.badge}
          </span>
          <span>{product.brand}</span>
        </div>

        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#EA580C]">
          {product.category}
        </span>
        <h2 className="mt-1 text-sm font-bold text-neutral-900">
          <Link href={`/products/${product.id}`} className="transition hover:text-[#EA580C]">
            {product.title}
          </Link>
        </h2>
        <p className="mt-1.5 text-[11px] leading-relaxed text-neutral-500">{product.desc}</p>
      </div>

      <div className="mt-5 border-t border-neutral-100 pt-3">
        <div className="mb-3 flex flex-wrap items-baseline gap-1.5">
          <span className="font-bold text-neutral-900">{formatProductPrice(product.price)}</span>
          <span className="text-[10px] text-neutral-500">{product.unit}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/products/${product.id}`}
            className="rounded border border-neutral-300 px-2 py-2.5 text-center text-[10px] font-semibold text-neutral-700 transition hover:bg-neutral-50"
          >
            Detail Produk
          </Link>
          <a
            href={`mailto:info@bangunspace.com?subject=${encodeURIComponent(`Penawaran ${product.title}`)}`}
            className="rounded bg-[#F3653B] px-2 py-2.5 text-center text-[10px] font-semibold text-white transition hover:bg-[#DC4C04]"
          >
            Minta Penawaran
          </a>
        </div>
      </div>
    </article>
  );
}
