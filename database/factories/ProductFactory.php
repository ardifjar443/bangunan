<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->words(3, true);

        return [
            'slug' => fake()->unique()->slug(),
            'title' => $title,
            'category' => fake()->randomElement([
                'CEMENT & MORTAR',
                'STEEL & METAL',
                'PAINT & COATING',
                'TILES & FLOORING',
            ]),
            'brand' => fake()->company(),
            'description' => fake()->sentence(),
            'price' => fake()->numberBetween(10000, 5000000),
            'unit' => '/ unit',
            'stock_status' => 'IN STOCK',
            'stock_quantity' => fake()->numberBetween(0, 100),
            'is_featured' => false,
            'detail_description' => null,
            'gallery' => [],
            'specifications' => [],
            'related_products' => [],
        ];
    }
}
