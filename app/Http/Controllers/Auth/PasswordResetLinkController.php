<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class PasswordResetLinkController extends Controller
{
    /**
     * Show the password reset link request page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/forgot-password', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);


        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->with('status', __('A reset link will be sent if the account exists.'));
        }

        $token = bin2hex(random_bytes(32));

        DB::table('password_reset_tokens')->updateOrInsert(
            [
                'email' => $request->email
            ],
            [
                'token' => Hash::make($token),
                'created_at' => now()
            ]
        );

        // Generate the reset URL in the correct format
        $resetUrl = url('/reset-password/' . $token . '?email=' . urlencode($request->email));

        // Send the data to your API
        try {
            $response = Http::post('https://mailer-dentlstudio.vercel.app/api/reset-password', [
                'email' => $request->email,
                'reset_url' => $resetUrl,
                'token' => $token,
                'user_name' => $user->name ?? '',
                'timestamp' => now()->toISOString(),
            ]);

            if ($response->successful()) {
                return back()->with('status', __('A reset link will be sent if the account exists.'));
            } else {
                // Log the error for debugging
                Log::error('Failed to send reset link to API', [
                    'email' => $request->email,
                    'response' => $response->body(),
                    'status' => $response->status(),
                ]);

                return back()->withErrors(['email' => 'Unable to process your request at this time.']);
            }
        } catch (\Exception $e) {
            Log::error('Exception when sending reset link to API', [
                'email' => $request->email,
                'error' => $e->getMessage(),
            ]);

            return back()->withErrors(['email' => 'Unable to process your request at this time.']);
        }


        return back()->with('status', __('A reset link will be sent if the account exists.'));
    }
}
