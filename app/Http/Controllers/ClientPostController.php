<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientPostController extends Controller
{
    public function index()
    {

        $blogs = Post::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->with('tags')
            ->simplePaginate(9)
            ->withQueryString();

        return Inertia::render('posts/blog-index', ['blogs' => $blogs]);
    }

    public function show(string $slug)
    {
        $post = Post::where('slug', $slug)
            ->with('tags') // Eager load tags for the current post
            ->firstOrFail();

        // Get the IDs of the tags associated with the current post
        $tagIds = $post->tags->pluck('id');

        // Fetch related posts
        $relatedPosts = Post::where('id', '!=', $post->id) // Exclude the current post
        ->where('status', 'published') // Only fetch published posts
        ->whereHas('tags', function ($query) use ($tagIds) {
            $query->whereIn('tags.id', $tagIds); // Posts sharing at least one tag
        })
            ->inRandomOrder() // Optional: Show a random selection of related posts
            ->limit(3) // Optional: Limit the number of related posts
            ->get();

        return Inertia::render('posts/blog-show', [
            'blog' => $post,
            'relatedPosts' => $relatedPosts, // Pass related posts to the view
        ]);
    }

}
