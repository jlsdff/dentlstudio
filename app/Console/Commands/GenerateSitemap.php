<?php

namespace App\Console\Commands;

use App\Models\Post;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/service'))
            ->add(Url::create('/contact-us'))
            ->add(Url::create('/about-us'))
            ->add(Url::create('/emergency-dentistry'))
            ->add(Url::create('/checkup-and-cleans'))
            ->add(Url::create('/teeth-grinding'))
            ->add(Url::create('/root-canal'))
            ->add(Url::create('/tmj-treatment'))
            ->add(Url::create('/sports-mouthguard'))
            ->add(Url::create('/childrens-dentistry'))
            ->add(Url::create('/screening-for-oral-cancer'))
            ->add(Url::create('/veneers'))
            ->add(Url::create('/teeth-whitening'))
            ->add(Url::create('/dental-bonding'))
            ->add(Url::create('/crown-lengthening'))
            ->add(Url::create('/dental-contouring'))
            ->add(Url::create('/cosmetic-injectables'))
            ->add(Url::create('/dental-fillings'))
            ->add(Url::create('/inlays-and-onlays'))
            ->add(Url::create('/dental-crowns'))
            ->add(Url::create('/dental-bridges'))
            ->add(Url::create('/dental-implants'))
            ->add(Url::create('/dentures'))
            ->add(Url::create('/extractions'))
            ->add(Url::create('/wisdom-teeth-removal'))
            ->add(Url::create('/dental-implant-replacement-services'))
            ->add(Url::create('/forehead-creases'))
            ->add(Url::create('/frown-lines'))
            ->add(Url::create('/crows-feet'))
            ->add(Url::create('/brow-lift'))
            ->add(Url::create('/bunny-lines'))
            ->add(Url::create('/hyperhidrosis'))
            ->add(Url::create('/lip-flip'))
            ->add(Url::create('/gummy-smile'))
            ->add(Url::create('/upper-lip-lines'))
            ->add(Url::create('/downward-smile'))
            ->add(Url::create('/dimpled-chin'))
            ->add(Url::create('/neferti-neck-lift'))
            ->add(Url::create('/masseters'))
            ->add(Url::create('/blogs'));

        Post::select(['slug'])->get()->each(function (Post $post) use ($sitemap) {
            $sitemap->add(Url::create("/blog/{$post->slug}"));
        });

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
