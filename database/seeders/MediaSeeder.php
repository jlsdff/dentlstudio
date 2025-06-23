<?php

namespace Database\Seeders;

use App\Models\Media;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for ($i = 0; $i < 20; $i++) {
            Media::factory()->create([
                'name' =>  "logo-$i",
                'path' => 'photos/logo-1.png'
            ]);

            // Media::factory()->create([
            //     'name' => "songmin-$i",
            //     'path' => 'photos/songmin.jpg'
            // ]);
        }
    }
}
