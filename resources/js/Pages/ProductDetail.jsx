import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
  ChevronRight,
  ClipboardList,
  MessageCircle,
  Minus,
  Plus,
  Truck,
} from "lucide-react";
import SiteFooter from "../Components/SiteFooter";
import SiteHeader from "../Components/SiteHeader";
import { formatProductPrice } from "../data/products";

function RelatedProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-md border border-neutral-200 bg-white">
      <div className="flex h-32 items-center justify-center bg-[#EAECE9] px-4 text-center text-[10px] text-neutral-500">
        {product.preview}
      </div>
      <div className="p-4">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
          {product.brand}
        </span>
        <h3 className="mt-1 text-xs font-medium text-neutral-900">{product.title}</h3>
        <p className="mt-2 text-[11px] font-semibold text-[#E9532E]">
          {formatProductPrice(product.price)} <span className="font-normal">{product.unit}</span>
        </p>
      </div>
    </article>
  );
}

export default function ProductDetail({ product }) {
  const [activeGallery, setActiveGallery] = useState(0);
  const [quantity, setQuantity] = useState(Math.max(product.stockQuantity, 1));
  const gallery = product.gallery.length > 0
    ? product.gallery
    : ["Foto Produk", "Spesifikasi", "Sertifikasi", "Pengiriman"];
  const specifications = product.specifications.length > 0
    ? product.specifications
    : [
    { parameter: "Kategori", value: product.category, standard: "DATA CONTOH" },
    { parameter: "Produsen", value: product.brand, standard: "DATA CONTOH" },
    { parameter: "Ketersediaan", value: product.badge, standard: "Konfirmasi saat pemesanan" },
    { parameter: "Deskripsi", value: product.desc, standard: "DATA CONTOH" },
  ];
  const relatedProducts = product.relatedProducts;
  const description = product.detailDescription ?? product.desc;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${product.title}.`)}`;
  const quoteUrl = `mailto:info@bangunspace.com?subject=${encodeURIComponent(`Permintaan BOQ ${product.title}`)}&body=${encodeURIComponent(`Produk: ${product.title}\nJumlah: ${quantity} ${product.unit}\n\nMohon kirimkan penawaran resmi.`)}`;

  return (
    <div className="min-h-screen bg-[#F7F6F3] font-sans text-neutral-900">
      <Head title={product.title} />
      <SiteHeader activePage="products" />

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 py-4 text-[10px] text-neutral-500">
          <Link href="/" className="hover:text-[#E9532E]">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-[#E9532E]">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span>{product.category}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-neutral-700">{product.title}</span>
        </nav>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
            <div className="flex h-64 items-center justify-center bg-[#EAECE9] px-6 text-center text-[11px] uppercase tracking-wide text-neutral-500 sm:h-80">
              {activeGallery === 0 ? product.title : gallery[activeGallery] ?? product.category}
            </div>
            <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
              {gallery.map((view, index) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setActiveGallery(index)}
                    aria-pressed={activeGallery === index}
                    className={`flex h-12 items-center justify-center rounded px-2 text-center text-[9px] transition ${
                      activeGallery === index
                        ? "border border-[#F3653B] bg-[#F2F1EE] text-neutral-800"
                        : "bg-[#EAECE9] text-neutral-500 hover:bg-neutral-200"
                    }`}
                  >
                    {view}
                  </button>
                ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-[#124D38] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white">
                {product.badge}
              </span>
              <span className="rounded bg-[#39251C] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#F5A17E]">
                Data Contoh
              </span>
            </div>
            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              {product.brand} · Structural Grade SS400 / SM490
            </p>
            <h1 className="mt-1 text-xl font-medium leading-snug text-neutral-900 sm:text-2xl">
              {product.title}
            </h1>
            <div className="mt-3 border-b border-neutral-200 pb-3">
              <p className="text-2xl font-semibold text-neutral-900">{formatProductPrice(product.price)}</p>
              <p className="mt-1 text-[10px] text-neutral-500">
                {product.unit} · PPN 11% · Faktur Pajak Resmi tersedia
              </p>
            </div>

            <div className="py-3">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#E9532E]">
                Deskripsi Arsitektural & Struktural
              </h2>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">{description}</p>
            </div>

            <div className="mt-auto flex flex-col gap-2 sm:flex-row">
              <div className="flex h-10 items-center justify-between rounded border border-neutral-200 bg-white px-2">
                <button
                  type="button"
                  aria-label="Kurangi jumlah"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="p-1 text-neutral-600 hover:text-neutral-950"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="min-w-20 text-center text-[10px] font-semibold">
                  {quantity} {product.unit.split("/").pop()?.trim() || "unit"}
                </span>
                <button
                  type="button"
                  aria-label="Tambah jumlah"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="p-1 text-neutral-600 hover:text-neutral-950"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded bg-[#171B19] px-3 text-[10px] font-semibold text-white transition hover:bg-neutral-800"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Chat via WhatsApp B2B
              </a>
              <a
                href={quoteUrl}
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded bg-[#F3653B] px-3 text-[10px] font-semibold text-white transition hover:bg-[#DC4C04]"
              >
                <ClipboardList className="h-3.5 w-3.5" />
                Minta BOQ Resmi
              </a>
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-[9px] leading-relaxed text-neutral-500">
              <Truck className="mt-0.5 h-3 w-3 shrink-0" />
              Pengiriman armada truk trailer / fuso langsung ke lokasi site proyek. Free ongkir untuk volume B2B Jabodetabek.
            </p>
          </div>
        </section>

        <section className="mt-7 min-h-64 rounded-md border border-neutral-200 bg-white p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-800">
            Spesifikasi Teknik & Standarisasi Lab (Data Contoh)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-[10px]">
              <thead className="bg-[#171B19] text-[9px] uppercase tracking-wider text-white">
                <tr>
                  <th className="px-3 py-2">Parameter Pengujian</th>
                  <th className="px-3 py-2">Standar & Nilai Spesifikasi</th>
                  <th className="px-3 py-2">Sertifikasi Acuan</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((specification, index) => (
                  <tr
                    key={specification.parameter}
                    className={index % 2 === 0 ? "bg-[#F7F6F3]" : "bg-white"}
                  >
                    <th scope="row" className="px-3 py-2 font-medium text-neutral-800">
                      {specification.parameter}
                    </th>
                    <td className="px-3 py-2 text-neutral-700">{specification.value}</td>
                    <td className="px-3 py-2 text-neutral-500">{specification.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-800">
              Material Struktural Terkait Proyek Anda
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard key={relatedProduct.title} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
