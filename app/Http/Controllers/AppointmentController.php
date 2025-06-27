<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appoinment;
use App\Models\Appointment;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('appointments/appointment-index');
    }

    public function create()
    {
        # code...
    }

    public function store(Request $request)
    {
        # code...
    }

    public function show()
    {
        # code...
    }

    public function edit()
    {
        # code...
    }

    public function update(Request $request)
    {
        # code...
    }

    public function destroy(Appointment $appointments)
    {
        # code...
    }
}
