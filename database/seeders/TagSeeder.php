<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagSeeder extends Seeder
{

    public function run(): void
    {

        $tags = [
            'Oral Health',
            'Teeth Whitening',
            'Braces',
            'Dental Implants',
            'Pediatric Dentistry',
            'Gum Care',
            'Root Canal',
            'Tooth Extraction',
            'Dental Hygiene',
            'Preventive Dentistry',
            'Cosmetic Dentistry',
            'Emergency Dental Care',
            'Toothache Remedies',
            'Dental Tips',
            'Invisalign',
            'Crowns and Bridges',
            'Bad Breath',
            'Cavities',
            'Dental Checkups',
            'Smile Makeover',
        ];

        foreach ($tags as $tag) {
            Tag::insert(['name' => $tag]);
        }
    }
}
