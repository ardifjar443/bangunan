<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gallery = ['Foto Produk', 'Cross Section', 'Mill Marking', 'Project Staging'];
        $products = [
            [
                'title' => 'Semen Tiga Roda PCC 50kg SNI',
                'category' => 'CEMENT & MORTAR',
                'brand' => 'Indocement Tiga Roda',
                'description' => 'SNI 7064:2014. Kuat tekan 28 hari 27.5 MPa. Cocok struktur dan pasangan.',
                'price' => 75500,
                'unit' => '/ sak (min 10)',
                'is_featured' => true,
            ],
            [
                'title' => 'Baja Wide Flange WF 200x100x5.5x8 (12m) SNI',
                'category' => 'STEEL & METAL',
                'brand' => 'Krakatau Steel',
                'description' => 'Grade SS400 / SM490 bersertifikat mill test. Profil struktur pabrikan.',
                'price' => 3820000,
                'unit' => '/ btg (12m)',
                'stock_quantity' => 25,
                'detail_description' => 'Material baja profil canai panas (hot rolled) berstandar SNI 03-1729-2002 dan JIS G3101 SS400. Dirancang khusus untuk memikul momen lentur tinggi pada kolom dan balok utama bangunan bertingkat, bentang lebar fasilitas industri, jembatan, dan portal arsitektur ekspos. Disertai sertifikat Mill Test Certificate (MTC) batch asli dari produsen.',
                'specifications' => [
                    [
                        'parameter' => 'Dimensi Profil & Flange',
                        'value' => 'H 200 mm × 100 mm × 5.5 mm × 8 mm',
                        'standard' => 'SNI 03-1729-2002 / JIS G3101',
                    ],
                    [
                        'parameter' => 'Berat Nominal Per Batang',
                        'value' => '25.6 kg / batang (12.3 kg/meter lari) ±2.5% toleransi pabrik',
                        'standard' => 'Toleransi SNI 2052 Wajib',
                    ],
                    [
                        'parameter' => 'Tegangan Leleh Minimal (Yield Strength)',
                        'value' => '245 N/mm² (fy minimal SS400) / 400–510 N/mm² (Tensile)',
                        'standard' => 'ASTM A36 Equivalent / JIS SS400',
                    ],
                    [
                        'parameter' => 'Kelengkapan Dokumen Pengiriman',
                        'value' => 'Original Mill Test Certificate (MTC), Surat Jalan Resmi, Faktur Pajak 11%',
                        'standard' => 'Dokumen Mutu ISO 9001:2015',
                    ],
                    [
                        'parameter' => 'Metode Proteksi Permukaan',
                        'value' => 'Black Steel finish (Oiled); opsi Sandblasting Sa 2.5 + Zinc Phosphate',
                        'standard' => 'Permukaan ISO 8501-1 (NACE No. 2)',
                    ],
                ],
                'related_products' => [
                    [
                        'brand' => 'Krakatau Steel',
                        'title' => 'Besi Baja H-Beam 150x150 (12m)',
                        'preview' => 'H-BEAM 150x150x7x10 MM · STRUCTURAL STEEL',
                        'price' => 4150000,
                        'unit' => '/ btg',
                    ],
                    [
                        'brand' => 'Master Steel',
                        'title' => 'Besi Beton Ulir D16 TS420 (12m)',
                        'preview' => 'DEFORMED REBAR ULIR D16 SNI TS420B',
                        'price' => 188000,
                        'unit' => '/ btg',
                    ],
                    [
                        'brand' => 'BangunSpace Fabrication',
                        'title' => 'Base Plate Baja 400x400x20mm Custom',
                        'preview' => 'BASEPLATE 34.8 20MM HIGH TENSILE ASTM A36',
                        'price' => 340000,
                        'unit' => '/ pcs',
                    ],
                ],
                'is_featured' => true,
            ],
            [
                'title' => 'Granite Slab 60x120 Glazed',
                'category' => 'TILES & FLOORING',
                'brand' => 'Valentino Gress',
                'description' => 'Presisi rectified edge, water absorption <0.1%, anti-scratch resistant.',
                'price' => 285000,
                'unit' => '/ dus (1.44m²)',
                'is_featured' => true,
            ],
            [
                'title' => 'Epoxy Floor Self-Leveling 20kg',
                'category' => 'PAINT & COATING',
                'brand' => 'Dulux Professional',
                'description' => 'Self-cross 2-komponen, tahan beban forklift, higienis untuk farmasi & gudang.',
                'price' => 1450000,
                'unit' => '/ set (20kg)',
            ],
            [
                'title' => 'Spandek Zincalume AZ150 0.45mm',
                'category' => 'ROOFING SYSTEMS',
                'brand' => 'Bluescope Lysaght',
                'description' => 'Lapisan anti karat 55% Alum-Zinc, garansi korosi hingga 15 tahun pabrik.',
                'price' => 88000,
                'unit' => '/ meter lari',
            ],
            [
                'title' => 'Pipa PPR PN-20 Air Panas 1"',
                'category' => 'PLUMBING & VALVES',
                'brand' => 'Wavin Rucika',
                'description' => 'Tekanan kerja PN-20 tahan hingga 95°C, food-grade standar hotel & rumah sakit.',
                'price' => 115000,
                'unit' => '/ btg (4m)',
            ],
            [
                'title' => 'Kanal C Baja Ringan 0.75mm (6m)',
                'category' => 'ROOFING SYSTEMS',
                'brand' => 'Tatalogap Steel',
                'description' => 'Tinggi profil C75 tebal murni 0.75mm high-tensile G550 standar SNI rangka atap.',
                'price' => 118000,
                'unit' => '/ batang 6m',
            ],
            [
                'title' => 'Papan Gypsum Jayaboard 9mm',
                'category' => 'FINISHING MATERIALS',
                'brand' => 'Jayaboard',
                'description' => 'Ketahanan lendur optimal, permukaan halus rata siap cat interior tanpa retak.',
                'price' => 72000,
                'unit' => '/ lembar 120x240cm',
            ],
            [
                'title' => 'Besi Wiremesh M8 Ulir SNI (Lembar)',
                'category' => 'STEEL & METAL',
                'brand' => 'Lion Mesh',
                'description' => 'Ukuran 2.1m x 5.4m, diameter 8mm ulir, tegangan leleh min 5000 kg/cm².',
                'price' => 645000,
                'unit' => '/ lembar 5.4x2.1m',
            ],
        ];

        foreach ($products as $attributes) {
            $attributes = [
                'slug' => Str::slug($attributes['title']),
                'stock_status' => 'IN STOCK',
                'stock_quantity' => 100,
                'is_featured' => false,
                'detail_description' => null,
                'gallery' => $gallery,
                'specifications' => [],
                'related_products' => [],
                ...$attributes,
            ];

            Product::query()->updateOrCreate(
                ['slug' => $attributes['slug']],
                $attributes,
            );
        }
    }
}
