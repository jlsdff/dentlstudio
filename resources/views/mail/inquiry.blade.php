<div
    style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:20px;font-family:Arial,Helvetica,sans-serif;color:#333333;line-height:1.5;">
    <h2 style="font-size:20px;font-weight:bold;color:#111827;margin-bottom:16px;">
        New Contact Form Submission
    </h2>

    <p style="margin-bottom:16px;">
        You have received a new enquiry from your website’s <strong>Contact Us</strong> page.
    </p>

    <div style="border:1px solid #d1d5db;border-radius:6px;overflow:hidden;">
        <div style="padding:12px;border-bottom:1px solid #d1d5db;display:flex;justify-content:space-between;">
            <span style="font-weight:600;color:#374151;">First Name:</span>
            <span style="color:#111827;">{{ $firstname }}</span>
        </div>
        <div style="padding:12px;border-bottom:1px solid #d1d5db;display:flex;justify-content:space-between;">
            <span style="font-weight:600;color:#374151;">Last Name:</span>
            <span style="color:#111827;">{{ $lastname }}</span>
        </div>
        <div style="padding:12px;border-bottom:1px solid #d1d5db;display:flex;justify-content:space-between;">
            <span style="font-weight:600;color:#374151;">Email:</span>
            <span style="color:#111827;">{{ $email }}</span>
        </div>
        <div style="padding:12px;">
            <span style="font-weight:600;color:#374151;display:block;margin-bottom:4px;">Message:</span>
            <p style="margin:0;color:#111827;white-space:pre-line;">{{ $userMessage }}</p>
        </div>
    </div>

    <p style="margin-top:20px;color:#4b5563;">
        Please respond to this enquiry at your earliest convenience.
    </p>

    <p style="margin-top:12px;font-size:13px;color:#6b7280;">
        — The Dentl Studio Website
    </p>
</div>
