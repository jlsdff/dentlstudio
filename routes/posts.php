<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/post/create', function () {
        return Inertia::render('posts/create');
    });
});
