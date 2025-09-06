<?php

namespace App\Http\Controllers;

use App\Mail\Inquiry as MailInquiry;
use Illuminate\Http\Request;
use App\Models\Inquiry;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
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
            'phone_number' => ['required', 'integer', 'min_digits:10', 'max_digits:11'],
            'message' => ['required', 'string']
        ]);

        Inquiry::create($request->all());

        $payload = [
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'message' => $request->message
        ];

        Http::post(config('mail.api_url') . "/contact-us", $payload);

        return back()->with([
            'success' => true,
            'message' => 'Thank you for reaching out! We will get back to you as soon as possible. In the meantime, feel free to browse our site or follow us on social media for updates.'
        ]);
    }
}
