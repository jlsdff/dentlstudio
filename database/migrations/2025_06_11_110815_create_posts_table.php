<?php

use App\Models\User;
use App\Models\Post;
use App\Models\Tag;
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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)
                ->constrained()
                ->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('slug')->unique();
            $table->string('cover_image');
            $table->json('content');
            $table->enum('status', ['draft', 'published', 'archieved'])->default('draft');
            $table->timestamp('published_at')->nullable()->index();
            $table->timestamps();
        });

        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });

        Schema::create('post_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Post::class)
                ->constrained()
                ->onDelete('cascade');
            $table->foreignIdFor(Tag::class)
                ->constrained()
                ->onDelete('cascade');
            $table->unique(['post_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
        Schema::dropIfExists('post_tag');
        Schema::dropIfExists('tags');
    }
};
