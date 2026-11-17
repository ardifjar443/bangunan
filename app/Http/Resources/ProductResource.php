<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'badge' => $this->stock_status,
            'category' => $this->category,
            'brand' => $this->brand,
            'title' => $this->title,
            'desc' => $this->description,
            'price' => (float) $this->price,
            'unit' => $this->unit,
            'stockQuantity' => $this->stock_quantity,
            'detailDescription' => $this->detail_description,
            'gallery' => $this->gallery ?? [],
            'specifications' => $this->specifications ?? [],
            'relatedProducts' => collect($this->related_products ?? [])
                ->map(fn (array $product): array => [
                    ...$product,
                    'price' => (float) ($product['price'] ?? 0),
                ])
                ->all(),
        ];
    }
}
