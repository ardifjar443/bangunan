<?php

namespace Tests\Feature;

use App\Models\Product;
use Database\Seeders\ProductSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_the_product_catalog_route_renders_its_inertia_page(): void
    {
        $product = Product::factory()->create([
            'title' => 'Sample Product',
            'category' => 'STEEL & METAL',
        ]);

        $this->get('/products')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('ProductCatalog')
                ->where('products.0.title', $product->title)
                ->where('categories.0', $product->category));
    }

    public function test_a_product_detail_route_renders_the_requested_product_id(): void
    {
        $product = Product::factory()->create();

        $this->get("/products/{$product->id}")
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('ProductDetail')
                ->where('product.id', $product->id));
    }

    public function test_a_product_detail_route_rejects_non_numeric_ids(): void
    {
        $this->get('/products/not-a-number')->assertNotFound();
    }

    public function test_a_product_detail_route_returns_404_for_missing_products(): void
    {
        $this->get('/products/999999')->assertNotFound();
    }

    public function test_the_homepage_lists_featured_products_from_the_database(): void
    {
        $featuredProduct = Product::factory()->create([
            'is_featured' => true,
        ]);
        Product::factory()->create([
            'is_featured' => false,
        ]);

        $this->get('/')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->where('products.0.id', $featuredProduct->id)
                ->has('products', 1));
    }

    public function test_the_product_seeder_can_run_more_than_once_without_duplicates(): void
    {
        $this->seed(ProductSeeder::class);
        $this->seed(ProductSeeder::class);

        $this->assertDatabaseCount('products', 9);
    }
}
