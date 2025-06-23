<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::paginate(10);

        return Inertia::render('posts/post-index', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('posts/post-create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => ['required', 'string'],
            'content' => ['required', 'string'],
            'status' => ['required', 'string']
        ]);

        $post = Post::create([
            'title' => $attributes['title'],
            'content' => $attributes['content'],
            'status' => $attributes['status'],
            'user_id' => Auth::user()->id,
            'slug' => Str::slug($attributes['title'])
        ]);

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
