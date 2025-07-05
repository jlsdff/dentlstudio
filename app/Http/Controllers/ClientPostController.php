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
            ->cursorPaginate(10);

        return Inertia::render('posts/blog-index', ['blogs' => $blogs]);
    }

    public function show(string $slug)
    {

        $post = Post::where('slug', $slug)
            ->with('tags')
            ->firstOrFail();

        return Inertia::render('posts/blog-show', ['blog' => $post]);
    }
}
