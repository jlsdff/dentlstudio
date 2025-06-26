<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $status = $request->query('status');
        $orderBy = $request->query('orderBy');

        $allowedSortFields = ['title', 'created_at', 'published_at'];
        $sortColumn = in_array($orderBy, $allowedSortFields) ? $orderBy : 'created_at';

        $posts = Post::query()
            ->with('tags')
            ->when($search, fn($q) => $q->where('title', 'like', "%{$search}%"))
            ->when($status, fn($q) => $q->where('status', $status))
            ->when($orderBy, fn($q) => $q->where('orderBy', $orderBy))
            ->orderBy($sortColumn, 'desc')
            ->paginate(10)
            ->appends($request->only('search', 'status', 'orderBy'));

        return Inertia::render('posts/post-index', [
            'posts' => $posts,
            'filters' => compact('search', 'status', 'orderBy')
        ]);
    }

    public function create()
    {
        return Inertia::render('posts/post-create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => ['required', 'string'],
            'content' => ['required', 'array'],
            'status' => ['string'],
            'cover' => ['required', 'string'],
            'description' => ['required', 'string'],
            'tags' => ['required', 'array', 'min:1'],
            'tags.*' => ['integer', 'distinct']
        ]);

        $post = Post::create([
            'title' => $attributes['title'],
            'content' => json_encode($attributes['content']),
            'description' => $attributes['description'],
            'status' => $attributes['status'] ?? 'draft',
            'cover_image' => $attributes['cover'],
            'user_id' => Auth::id(),
            'published_at' => $attributes['status'] === 'published' ? Carbon::now() : null,
            'slug' => Str::slug($attributes['title'])
        ]);

        $post->tags()->sync($attributes['tags']);

        return to_route('post.index')->with(['succeess' => true, 'post' => $post]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
