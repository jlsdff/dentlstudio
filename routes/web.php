<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\AppointmentController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        // return Inertia::render('dashboard');
        return to_route('post.index');
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
    Route::get('/post/{slug}/edit', [PostController::class, 'edit'])
        ->name('post.edit');
    Route::patch('/post/{post}', [PostController::class, 'update'])
        ->name('post.update');
    Route::get('/post/{slug}', [PostController::class, 'show'])
        ->name('post.show');
    Route::delete('/post/{post}', [PostController::class, 'destroy'])
        ->name('post.destroy');

    Route::get('/tags', [TagController::class, 'index'])
        ->name('tag.index');
    Route::post('/tags', [TagController::class, 'store'])
        ->name('tag.store');

    Route::get('/appointments/index', [AppointmentController::class, 'index'])
        ->name('appointment.index');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
