<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('category')->index();
            $table->string('brand');
            $table->text('description');
            $table->decimal('price', 15, 2);
            $table->string('unit', 100);
            $table->string('stock_status')->default('IN STOCK');
            $table->unsignedInteger('stock_quantity')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->text('detail_description')->nullable();
            $table->json('gallery')->nullable();
            $table->json('specifications')->nullable();
            $table->json('related_products')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
