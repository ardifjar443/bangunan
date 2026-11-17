import { Link } from "@inertiajs/react";
import { Building2 } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800/80 bg-[#141414] py-12 text-xs text-neutral-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.18em] text-white"
          >
            <Building2 className="h-4 w-4 text-[#EA580C]" />
            BANGUNSPACE
          </Link>
          <p className="max-w-sm text-xs leading-relaxed text-neutral-500">
            Pusat distribusi dan solusi material bangunan arsitektural berstandar
            internasional untuk kontraktor, developer, arsitek, dan pemilik proyek.
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-wider text-white">Navigation</h2>
          <ul className="space-y-1.5 text-[11px] text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-300">Home</Link></li>
            <li><Link href="/products" className="hover:text-neutral-300">Products Catalog</Link></li>
            <li><a href="/#projects" className="hover:text-neutral-300">Project Archive</a></li>
            <li><a href="/#contact" className="hover:text-neutral-300">Contact & Quote</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-wider text-white">Categories</h2>
          <p className="text-[11px] leading-relaxed text-neutral-500">
            Cement & Mortar | Steel & Metal<br />
            Paint & Coating | Granite & Tiles<br />
            Roofing | Plumbing
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="mb-3 text-[10px] font-bold uppercase tracking-wider text-white">Headquarters</h2>
          <p className="text-[11px] leading-relaxed text-neutral-500">
            Cikarang, Bekasi, Jawa Barat 17530<br />
            info@bangunspace.com · +62 (021) 8900-2233
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-neutral-800/80 px-6 pt-5 text-[11px] text-neutral-600 sm:flex-row">
        <span>© 2026 BANGUNSPACE. All rights reserved. Data katalog merupakan contoh.</span>
        <span className="text-neutral-500">LinkedIn · Instagram · ArchDaily · WhatsApp B2B</span>
      </div>
    </footer>
  );
}
