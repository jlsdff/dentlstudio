<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry;
use Inertia\Inertia;

class InquiryController extends Controller
{
    public function index()
    {
        $inquiries = Inquiry::orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('inquiries/inquiry-index', ['inquiries' => $inquiries]);
    }

    public function create()
    {
        return Inertia::render('contact-us');
    }

    public function store(Request $request)
    {

        $request->validate([
            'firstname' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'email' => ['required', 'email'],
            'message' => ['required', 'string']
        ]);

        Inquiry::create($request->all());

        return back()->with([
            'success' => true,
            'message' => 'Thank you for reaching out! We will get back to you as soon as possible. In the meantime, feel free to browse our site or follow us on social media for updates.'
        ]);
    }
}
