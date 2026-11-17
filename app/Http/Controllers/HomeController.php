<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        $featuredProducts = Product::query()
            ->where('is_featured', true)
            ->orderBy('id')
            ->limit(3)
            ->get();

        return Inertia::render('Home', [
            'products' => ProductResource::collection($featuredProducts)->resolve(),
        ]);
    }
}
