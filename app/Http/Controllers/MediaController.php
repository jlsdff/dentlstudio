<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function index()
    {
        $medias = Media::orderBy('created_at', 'desc')
            ->cursorPaginate(10);

        return Inertia::render('media/index', ['medias' => $medias]);
    }

    public function store()
    {
        request()->validate([
            'name' => ['required', 'string', 'min:3'],
            'image' => ['required', 'image']
        ]);

        if (request()->hasFile('image')) {
            $path = Storage::disk('public')->putFile(request()->image);
            Media::create([
                'path' => $path,
                'name' => request()->name
            ]);
        }

        return redirect()->back();
    }

    public function create()
    {
        return to_route('media.index');
    }

    public function show() {}

    public function destroy(Media $media)
    {
        if (Storage::disk('public')->exists($media->path)) {
            Storage::disk('public')->delete($media->path);
        }
        $media->delete();

        return to_route('media.index');
    }
}
