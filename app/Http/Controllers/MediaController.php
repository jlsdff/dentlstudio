<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MediaController extends Controller
{
    public function index()
    {
        $medias = Media::orderBy('created_at', 'desc')
            ->paginate(10);

        if (request()->wantsJson()) {
            return response()->json($medias);
        }

        return Inertia::render('media/index', ['medias' => $medias]);
    }

    public function store()
    {
        request()->validate([
            'name' => [
                'required',
                'string',
                'min:3',
                Rule::unique('media', 'name')
            ],
            'image' => [
                'required',
                'image',
                File::types(['png', 'jpg', 'jpeg'])
                    ->max('8mb')
            ]
        ]);

        if (request()->hasFile('image')) {

            $file = request()->file('image');
            $name = request()->name;
            $extension = $file->getClientOriginalExtension();
            $filename = Str::slug($name) . '.' . $extension;

            $path = $file->storeAs('photos', $filename, 'public');

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
