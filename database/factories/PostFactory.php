<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->realText(20);
        return [
            'user_id' => 1,
            'title' =>  $title,
            'description' => fake()->realText(200),
            'content' => '{"type":"doc","content":[{"type":"heading","attrs":{"level":1},"content":[{"type":"text","text":"Is Your Stress Affecting Your Dental Health?"}]},{"type":"image","attrs":{"src":"\\/storage\\/photos\\/stress.jpg","alt":"stress","title":"stress"}},{"type":"blockquote","content":[{"type":"paragraph","content":[{"type":"text","text":"While stress is unavoidable in modern life, its impact on your oral health can be significant. As your partner in oral health, we\\u2019re here to help you identify the connection between stress and dental problems, and learn effective strategies to protect your smile."}]}]},{"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"How Stress Compromises Oral Health"}]},{"type":"paragraph","content":[{"type":"text","text":"Stress can trigger numerous dental issues, including:"}]},{"type":"bulletList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Teeth grinding and clenching (bruxism), which can lead to sensitivity and potential fractures"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Increased vulnerability to gum disease as stress weakens immune response"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Development of painful mouth ulcers and canker sores"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Reduced saliva production leading to dry mouth and higher cavity risk."}]}]}]},{"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Stress Management for Better Oral Health"}]},{"type":"paragraph","content":[{"type":"text","text":"Effectively managing stress is crucial for maintaining dental well being. Consider these approaches to reduce stress and protect your smile:"}]},{"type":"heading","attrs":{"level":4},"content":[{"type":"text","text":"Heading 4"}]},{"type":"bulletList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Incorporate relaxation practices like deep breathing exercises, gentle yoga, or mindfulness meditation"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Maintain regular physical activity to naturally reduce stress hormones"}]}]}]},{"type":"heading","attrs":{"level":5},"content":[{"type":"text","text":"Heading 5"}]},{"type":"heading","attrs":{"level":6},"content":[{"type":"text","text":"Heading 6"}]},{"type":"bulletList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Prioritize quality sleep to support overall health and stress resilience"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Don\\u2019t hesitate to seek professional guidance when stress becomes overwhelming"}]}]}]},{"type":"paragraph","content":[{"type":"text","text":"At The Dentl Studio, we\\u2019re dedicated to supporting your complete oral health, even during stressful periods."}]},{"type":"paragraph","content":[{"type":"text","text":"Contact our office today to schedule your dental examination and learn more about protecting your smile from stress-related damage."}]}]}',
            'status' => 'published',
            'published_at' => Carbon::now(),
            'cover_image' => "/storage/photos/stress.jpg",
            'slug' => Str::slug($title),
        ];
    }
}
