import { Head, router } from "@inertiajs/react";
import { ArrowRight, Search } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import SiteFooter from "../Components/SiteFooter";
import SiteHeader from "../Components/SiteHeader";

export default function Home({ products = [] }) {
  const categories = [
    {
      tag: "STRUCTURAL",
      title: "Cement & Mortar",
      desc: "Semen portland, mortar instan, dan perekat bata presisi tinggi.",
    },
    {
      tag: "STRUCTURAL",
      title: "Steel & Metal",
      desc: "Besi beton ulir, profil baja WF, H-Beam, dan plat konstruksi.",
    },
    {
      tag: "FINISHING",
      title: "Paint & Coating",
      desc: "Cat dinding eksterior tahan cuaca, interior, dan waterproofing.",
    },
    {
      tag: "SURFACES",
      title: "Tiles & Flooring",
      desc: "Granite tile homogeneus, keramik lantai heavy-duty, dan aksesoris.",
    },
    {
      tag: "ENVELOPE",
      title: "Roofing Systems",
      desc: "Rangka atap baja ringan struktural, genteng metal, dan insulasi.",
    },
    {
      tag: "MEP",
      title: "Plumbing & Pipes",
      desc: "Pipa PVC tekanan tinggi, HDPE, fitting, dan sistem sanitasi gedung.",
    },
    {
      tag: "EQUIPMENT",
      title: "Heavy Tools",
      desc: "Peralatan konstruksi berat, scaffolding, dan perkakas proyek.",
    },
    {
      tag: "ARCHITECTURAL",
      title: "Finishing Materials",
      desc: "Panel gypsum akustik, plafon PVC, dan komponen arsitektural.",
    },
  ];

  const features = [
    {
      num: "01",
      title: "Reliable Materials",
      desc: "Seluruh stok material telah melalui verifikasi standar mutu SNI dan sertifikasi pabrikan resmi[cite: 2].",
    },
    {
      num: "02",
      title: "Competitive Pricing",
      desc: "Skema harga grosir B2B langsung dari prinsipal untuk efisiensi anggaran proyek konstruksi Anda[cite: 2].",
    },
    {
      num: "03",
      title: "Project Support",
      desc: "Pendampingan teknis dan konsultasi spesifikasi material oleh tim engineer berpengalaman[cite: 2].",
    },
    {
      num: "04",
      title: "Reliable Delivery",
      desc: "Armada logistik terdedikasi dengan jadwal pengiriman terukur langsung ke lokasi proyek[cite: 2].",
    },
  ];

  const secondaryProjects = [
    {
      tag: "COMMERCIAL â€¢ JAKARTA SELATAN",
      title: "Ciputra Signature Office Park",
      desc: "Suplai baja struktural utama dan sistem pelapis fasad eksterior untuk kompleks perkantoran 28 lantai.",
    },
    {
      tag: "HOSPITALITY â€¢ ULUWATU, BALI",
      title: "BumiVista Cliff Luxury Resort",
      desc: "Pengadaan material finishing arsitektural, batu alam, dan sistem waterproofing kawasan resor tebing.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Konsistensi mutu semen dan baja struktural dari BangunSpace sangat terjaga. Ketepatan jadwal pengiriman ke site membantu kami menjaga target milestone proyek[cite: 2].",
      name: "Ir. Hendra Wijaya, M.T.",
      role: "Project Director â€” PT Karya Konstruksi Utama[cite: 2]",
    },
    {
      quote:
        "Transparansi spesifikasi teknis dan kecepatan tim dalam menerbitkan penawaran harga B2B memangkas waktu proses procurement tender kami secara signifikan[cite: 2].",
      name: "Rina Kusumawardhani, S.T.",
      role: "Head of Procurement â€” Nusantara Graha Persada[cite: 2]",
    },
    {
      quote:
        "Arsip spesifikasi arsitekturalnya sangat memudahkan studio kami dalam mengkurasi material finishing yang presisi sekaligus tetap masuk dalam pagu anggaran klien[cite: 2].",
      name: "Daniel Pramono, IAI",
      role: "Principal Architect â€” Studio Ruang & Bentuk[cite: 2]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-neutral-100 font-sans selection:bg-[#EA580C] selection:text-white">
      <Head title="BangunSpace â€” B2B Construction & Architectural Supply" />

      <SiteHeader activePage="home" />

          {/* --- HERO SECTION --- */}
          <section className="bg-[#141414] pt-8 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left White Hero Card */}
              <div className="lg:col-span-7 bg-white text-neutral-900 rounded-xl p-10 lg:p-12 flex flex-col justify-between min-h-[410px] shadow-sm">
                <div>
                  <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block mb-4">
                    B2B CONSTRUCTION & ARCHITECTURAL SUPPLY[cite: 1]
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6">
                    Precision Materials for Modern Architecture & Heavy Construction[cite: 1].
                  </h1>
                </div>

                <div>
                  <p className="text-neutral-600 text-sm leading-relaxed max-w-xl mb-7">
                    Platform pengadaan material konstruksi terintegrasi bagi kontraktor, arsitek, dan pengembang properti dengan jaminan spesifikasi standar industri dan pengiriman tepat jadwal[cite: 1].
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => router.visit("/products")}
                      className="bg-[#EA580C] hover:bg-[#DC4C04] text-white text-xs font-semibold px-6 py-3 rounded transition inline-flex items-center gap-2 cursor-pointer"
                    >
                      Explore Materials <ArrowRight className="w-3.5 h-3.5" />[cite: 1]
                    </button>
                    <a
                      href="#projects"
                      className="bg-[#1F1F1F] hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-3 rounded transition inline-flex items-center"
                    >
                      View Project Cases[cite: 1]
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Dark Architectural Archive Card */}
              <div className="lg:col-span-5 bg-[#242424] border border-neutral-800 rounded-xl p-8 lg:p-10 flex flex-col justify-between min-h-[410px]">
                <div>
                  <span className="inline-block bg-[#181818] border border-neutral-700 text-[#EA580C] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded">
                    SPEC ARCHIVE[cite: 1]
                  </span>
                  <h2 className="text-2xl lg:text-[26px] font-bold tracking-tight text-neutral-300/80 leading-snug mt-6 uppercase">
                    BUILDING &<br />
                    ARCHITECTURAL<br />
                    ARCHIVE[cite: 1]
                  </h2>
                </div>

                {/* Dark Inset Stats Box */}
                <div className="bg-[#181818] border border-neutral-800 rounded-lg p-6 mt-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-[#EA580C]">
                        1,450+[cite: 1]
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-1">
                        Verified Material Specs[cite: 1]
                      </div>
                    </div>
                    <div className="border-l border-neutral-800 pl-6">
                      <div className="text-2xl lg:text-3xl font-bold text-white">
                        320+[cite: 1]
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-1">
                        Landmark Projects Supplied[cite: 1]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- DARK SEARCH & FILTER STRIP --- */}
          <section className="bg-[#141414] border-t border-neutral-800/80 py-5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-400">
                QUICK SPECIFICATION LOOKUP â€¢ SNI & ISO VERIFIED[cite: 1]
              </div>
              <div className="w-full md:w-auto flex-1 max-w-2xl bg-white rounded-md p-1.5 flex items-center gap-2">
                <div className="flex items-center flex-1 px-3">
                  <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search material grade, SKU, or brand..."
                    className="w-full bg-transparent text-xs text-neutral-900 placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => router.visit("/products")}
                  className="bg-[#EA580C] hover:bg-[#DC4C04] text-white text-xs font-semibold px-4 py-2 rounded transition"
                >
                  Search
                </button>
              </div>
            </div>
          </section>

          {/* --- CURATED MATERIAL DISCIPLINES --- */}
          <section id="catalog" className="bg-[#F7F6F3] text-neutral-900 py-20 border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
                    MATERIAL TAXONOMY[cite: 1]
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-1.5">
                    Curated Material Disciplines[cite: 1]
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1.5">
                    Klasifikasi material konstruksi dan arsitektural terkurasi berdasarkan disiplin rekayasa bangunan[cite: 1].
                  </p>
                </div>
                <button
                  onClick={() => router.visit("/products")}
                  className="hidden sm:flex text-xs font-semibold text-[#EA580C] hover:underline items-center gap-1"
                >
                  Buka Katalog Lengkap <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    onClick={() => router.visit("/products")}
                    className="bg-[#1D1D1D] hover:bg-[#242424] border border-neutral-800 p-6 rounded-lg transition group cursor-pointer flex flex-col justify-between min-h-[168px]"
                  >
                    <div>
                      <span className="text-[#EA580C] text-[10px] font-bold tracking-[0.15em] uppercase block mb-3">
                        {cat.tag}[cite: 1]
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-[#EA580C] transition">
                        {cat.title}[cite: 1]
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed line-clamp-2">
                        {cat.desc}[cite: 1]
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-neutral-800/80">
                      <span className="text-[11px] font-semibold text-[#EA580C] inline-flex items-center gap-1">
                        Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />[cite: 1]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- FEATURED SPECIFICATION STOCK --- */}
          <section className="bg-[#F7F6F3] text-neutral-900 py-20 border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
                    READY FOR SITE DISPATCH[cite: 1]
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-1.5">
                    Featured Specification Stock[cite: 1]
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1.5">
                    Stok material siap kirim dengan ketersediaan volume besar dan sertifikat uji mutu lengkap[cite: 1].
                  </p>
                </div>
                <button
                  onClick={() => router.visit("/products")}
                  className="text-xs font-semibold text-[#EA580C] hover:underline flex items-center gap-1"
                >
                  Lihat Semua Produk di Katalog <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} featured />
                ))}
              </div>
            </div>
          </section>

          {/* --- BUILT ON PRECISION, STANDARD & RELIABILITY --- */}
          <section id="why-us" className="bg-[#F7F6F3] text-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-10">
                <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
                  WHY BANGUNSPACE[cite: 1]
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-1.5">
                  Built on Precision, Standard & Reliability[cite: 1]
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-lg p-6 shadow-xs"
                  >
                    <div className="text-[#EA580C] font-mono text-sm font-bold mb-3">
                      {feat.num}[cite: 1]
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-2">
                      {feat.title}[cite: 1]
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SUPPLYING INDONESIA'S LANDMARK SPACES --- */}
          <section id="projects" className="bg-[#141414] text-neutral-100 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
                    KEY PROJECT ARCHIVE[cite: 1]
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1.5">
                    Supplying Indonesia's Landmark Spaces[cite: 1]
                  </h2>
                </div>
                <button className="self-start sm:self-auto border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-semibold px-4 py-2 rounded transition">
                  See All Projects[cite: 1]
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 bg-[#1E1E1E] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
                  <div className="relative h-64 bg-[#2C2C2C] rounded-lg mb-6 flex items-center justify-center text-neutral-500 font-mono text-xs border border-neutral-800">
                    <span className="absolute top-3 left-3 bg-[#141414] border border-neutral-700 text-neutral-300 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                      STRUCTURAL STEEL[cite: 1]
                    </span>
                    <span>[LANDMARK PROJECT SHOWCASE][cite: 1]</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#EA580C] block">
                      COMMERCIAL HIGH-RISE â€¢ SURABAYA[cite: 1]
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      The Avondale Tower â€” Facade & Structure Steel Supply[cite: 1]
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Pengadaan baja struktural profil berat dan sistem rangka fasad presisi tinggi untuk menara komersial terpadu 42 lantai[cite: 1].
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#EA580C] hover:underline mt-4"
                    >
                      View Case Study <ArrowRight className="w-3 h-3" />[cite: 1]
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                  {secondaryProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1E1E1E] border border-neutral-800 rounded-xl p-7 flex flex-col justify-between flex-1"
                    >
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#EA580C] block">
                          {proj.tag}[cite: 1]
                        </span>
                        <h3 className="text-base font-bold text-white mt-1.5">
                          {proj.title}[cite: 1]
                        </h3>
                        <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                          {proj.desc}[cite: 1]
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#EA580C] hover:underline"
                        >
                          View Details <ArrowRight className="w-3 h-3" />[cite: 1]
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* --- TRUSTED BY LEADING BUILDERS --- */}
          <section className="bg-[#F7F6F3] text-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-10">
                <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
                  CLIENT ENDORSEMENTS[cite: 1]
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mt-1.5">
                  Trusted by Indonesia's Leading Builders[cite: 1]
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-lg p-7 shadow-xs flex flex-col justify-between"
                  >
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                      "{item.quote}"[cite: 2]
                    </p>
                    <div className="pt-4 border-t border-neutral-100">
                      <div className="text-xs font-bold text-neutral-900">
                        {item.name}[cite: 2]
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {item.role}[cite: 2]
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
      {/* --- CALL TO ACTION (CTA) --- */}
      <section id="contact" className="bg-[#141414] text-neutral-100 pt-20 pb-16 border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#EA580C] text-[11px] font-bold tracking-[0.16em] uppercase block">
            START YOUR PROCUREMENT WORKFLOW[cite: 1]
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            Let's Build Something Better.[cite: 1]
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 max-w-lg leading-relaxed">
            Kirimkan daftar kebutuhan Bill of Quantities (BoQ) atau konsultasikan spesifikasi teknis material proyek Anda bersama tim B2B kami[cite: 1].
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="bg-[#EA580C] hover:bg-[#DC4C04] text-white text-xs font-semibold px-6 py-3 rounded transition">
              Request Custom Quote[cite: 1]
            </button>
            <button className="bg-transparent hover:bg-neutral-800 text-white border border-neutral-700 text-xs font-semibold px-6 py-3 rounded transition">
              Contact Engineering Team[cite: 1]
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
