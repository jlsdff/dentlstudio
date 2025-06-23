<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PostController;
use App\Models\Post;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/medias', [MediaController::class, 'index'])
        ->name('media.index');

    Route::post('/medias', [MediaController::class, 'store'])
        ->name('media.store');

    Route::delete('/medias/${media}', [MediaController::class, 'destroy'])
        ->name('media.destroy');

    Route::get('/post/create', [PostController::class, 'create'])
        ->name('post.create');

    Route::get('/post', [PostController::class, 'index'])
        ->name('post.index');

    Route::post('/post', [PostController::class, 'store'])
        ->name('post.store');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
