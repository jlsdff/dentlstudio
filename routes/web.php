<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ClientPostController;
use App\Http\Controllers\InquiryController;
use App\Models\Post;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/service', function () {
    return Inertia::render('service');
})->name('service');

Route::get('/new-patients', function () {
    return Inertia::render('new-patient');
})->name('new-patients');

Route::get('/contact-us', [InquiryController::class, 'create'])
    ->name('contact-us');

Route::post('/contact-us', [InquiryController::class, 'store'])
    ->name('contact-us.store');

Route::get('/meet-the-team', function () {
    return Inertia::render('meet-the-team');
})->name('meet-the-team');

Route::get('/gallery', function () {
    return Inertia::render('gallery');
})->name('gallery');

Route::get('/about-us', function () {
    return Inertia::render('about-us');
})->name('about-us');

Route::get('/emergency-dentistry', function () {
    return Inertia::render('services/emergency-dentistry');
})->name('emergency-dentistry');

Route::get('/checkup-and-cleans', function () {
    return Inertia::render('services/checkup-and-cleans');
})->name('checkup-and-cleans');

Route::get('/teeth-grinding', function () {
    return Inertia::render('services/teeth-grinding');
})->name('teeth-grinding');

Route::get('/root-canal', function () {
    return Inertia::render('services/root-canal');
})->name('root-canal');

Route::get('/tmj-treatment', function () {
    return Inertia::render('services/tmj-treatment');
})->name('tmj-treatment');

Route::get('/sports-mouthguard', function () {
    return Inertia::render('services/sports-mouthguard');
})->name('sports-mouthguard');

Route::get('/childrens-dentistry', function () {
    return Inertia::render('services/childrens-dentistry');
})->name('childrens-dentistry');

Route::get('/screening-for-oral-cancer', function () {
    return Inertia::render('services/screening-for-oral-cancer');
})->name('screening-for-oral-cancer');

Route::get('/veneers', function () {
    return Inertia::render('services/veneers');
})->name('veneers');

Route::get('/teeth-whitening', function () {
    return Inertia::render('services/teeth-whitening');
})->name('teeth-whitening');

Route::get('/smile-makeover', function () {
    return Inertia::render('services/smile-makeover');
})->name('smile-makeover');

Route::get('/dental-bonding', function () {
    return Inertia::render('services/dental-bonding');
})->name('dental-bonding');

Route::get('/crown-lengthening', function () {
    return Inertia::render('services/crown-lengthening');
})->name('crown-lengthening');

Route::get('/clear-aligners', function () {
    return Inertia::render('services/clear-aligners');
})->name('clear-aligners');

Route::get('/dental-contouring', function () {
    return Inertia::render('services/dental-contouring');
})->name('dental-contouring');

Route::get('/cosmetic-injectables', function () {
    return Inertia::render('services/cosmetic-injectables');
})->name('cosmetic-injectables');

Route::get('dental-fillings', function () {
    return Inertia::render('services/dental-fillings');
})->name('dental-fillings');

Route::get('inlays-and-onlays', function () {
    return Inertia::render('services/inlays-and-onlays');
})->name('inlays-and-onlays');

Route::get('dental-crowns', function () {
    return Inertia::render('services/dental-crowns');
})->name('dental-crowns');

Route::get('dental-bridges', function () {
    return Inertia::render('services/dental-bridges');
})->name('dental-bridges');

Route::get('dental-implants', function () {
    return Inertia::render('services/dental-implants');
})->name('dental-implants');

Route::get('dentures', function () {
    return Inertia::render('services/dentures');
})->name('dentures');

Route::get('extractions', function () {
    return Inertia::render('services/extractions');
})->name('extractions');

Route::get('wisdom-teeth-removal', function () {
    return Inertia::render('services/wisdom-teeth-removal');
})->name('wisdom-teeth-removal');

Route::get('dental-implant-replacement-services', function () {
    return Inertia::render('services/dental-implant-replacement-services');
})->name('dental-implant-replacement-services');

Route::get('lip-flip', function () {
    return Inertia::render('services/lip-flip');
})->name('lip-flip');

Route::get('gummy-smile', function () {
    return Inertia::render('services/gummy-smile');
})->name('gummy-smile');

Route::get('upper-lip-lines', function () {
    return Inertia::render('services/upper-lip-lines');
})->name('upper-lip-lines');

Route::get('downward-smile', function () {
    return Inertia::render('services/downward-smile');
})->name('downward-smile');

Route::get('masseters', function () {
    return Inertia::render('services/masseters');
})->name('masseters');

Route::get('/blog/{slug}', [ClientPostController::class, 'show'])
    ->name('blogs.show');
Route::get('/blogs', [ClientPostController::class, 'index'])
    ->name('blogs.index');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        // return Inertia::render('dashboard');
        return to_route('post.index');
    })->name('dashboard');

    Route::get('/inquiries', [InquiryController::class, 'index'])
        ->name('inquiry.index');

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
