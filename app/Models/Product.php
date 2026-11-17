<?php

namespace App\Models;

use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'category',
        'brand',
        'description',
        'price',
        'unit',
        'stock_status',
        'stock_quantity',
        'is_featured',
        'detail_description',
        'gallery',
        'specifications',
        'related_products',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'stock_quantity' => 'integer',
            'is_featured' => 'boolean',
            'gallery' => 'array',
            'specifications' => 'array',
            'related_products' => 'array',
        ];
    }
}
