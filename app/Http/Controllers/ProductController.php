<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::query()->orderBy('id')->get();

        return Inertia::render('ProductCatalog', [
            'products' => ProductResource::collection($products)->resolve(),
            'categories' => $products->pluck('category')->unique()->values()->all(),
        ]);
    }

    public function show(Product $product): Response
    {
        return Inertia::render('ProductDetail', [
            'product' => (new ProductResource($product))->resolve(),
        ]);
    }
}
