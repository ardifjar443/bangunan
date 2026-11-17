import { Link } from "@inertiajs/react";
import { Building2 } from "lucide-react";

export default function SiteHeader({ activePage = "home" }) {
  const linkClass = (page) =>
    `transition ${activePage === page ? "text-[#EA580C] font-bold" : "hover:text-neutral-950"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-[#141414]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-bold tracking-[0.18em] text-white"
        >
          <Building2 className="h-5 w-5 text-[#EA580C]" />
          <span>BANGUNSPACE</span>
        </Link>

        <nav className="hidden items-center gap-6 rounded-md bg-white px-6 py-2 text-xs font-semibold tracking-wide text-neutral-700 md:flex">
          <Link href="/" className={linkClass("home")}>Home</Link>
          <Link href="/products" className={linkClass("products")}>Products</Link>
          <a href="/#catalog" className="transition hover:text-neutral-950">Categories</a>
          <a href="/#projects" className="transition hover:text-neutral-950">Projects</a>
          <a href="/#why-us" className="transition hover:text-neutral-950">Standards</a>
          <a href="/#contact" className="transition hover:text-neutral-950">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="text-xs font-semibold text-neutral-300 transition hover:text-white md:hidden"
          >
            Products
          </Link>
          <a
            href="/#contact"
            className="rounded bg-[#EA580C] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#DC4C04]"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
  );
}
