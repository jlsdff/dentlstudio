<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ClientPostController;
use App\Models\Post;

$services = [
    [
        'service' => '',
        '' => ''
    ]
];

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/service', function () {
    return Inertia::render('service');
})->name('service');

Route::get('/about-us', function () {
    return Inertia::render('about-us');
})->name('about-us');

Route::get('/service/{slug}', function (string $slug) {

    $services = [
        // General Dentistry
        [
            'id' => 1,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Emergency Dentistry',
            'slug' => 'emergency-dentistry',
            'image_url' => '/services/emergency.webp',
            'description' => 'Urgent dental care in Melbourne when you need it most. The Dentl Studio provides immediate emergency dental treatment for toothaches, broken teeth, dental trauma, and severe pain. Our experienced emergency dentists are available for same-day appointments to relieve your discomfort quickly and effectively.'
        ],
        [
            'id' => 2,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Check-Up and Cleans',
            'slug' => 'checkup-and-cleans',
            'image_url' => '/services/check_up_and_cleans.jpg',
            'description' => 'Comprehensive dental check-ups and professional teeth cleaning services in Melbourne. The Dentl Studio offers thorough oral health examinations, plaque and tartar removal, fluoride treatments, and personalised preventive care plans to maintain your optimal dental health and prevent future problems.'
        ],
        [
            'id' => 3,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Teeth Grinding',
            'slug' => 'teeth-grinding',
            'image_url' => '/services/teeth-grinding.jpeg',
            'description' => 'Expert teeth grinding (bruxism) treatment in Melbourne. The Dentl Studio provides custom night guards, bite adjustments, and comprehensive solutions to protect your teeth from grinding damage. Our dentists diagnose the underlying causes and create personalised treatment plans to reduce jaw pain and prevent tooth wear.'
        ],
        [
            'id' => 4,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'TMJ Treatment',
            'slug' => 'tmj-treatment',
            'image_url' => '/services/tmj.webp',
            'description' => 'Specialised TMJ (temporomandibular joint) disorder treatment in Melbourne. The Dentl Studio offers effective solutions for jaw pain, clicking sounds, headaches, and difficulty opening your mouth. Our experienced dentists provide custom splints, bite therapy, and comprehensive TMJ management to restore comfortable jaw function.'
        ],
        [
            'id' => 5,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Root Canals',
            'slug' => 'root-canals',
            'image_url' => '/services/root-canals.jpeg',
            'description' => 'Gentle root canal therapy in Melbourne to save your natural teeth. The Dentl Studio uses advanced techniques and local anaesthesia to make root canal treatment comfortable and pain-free. Our skilled endodontists remove infected pulp, clean the tooth interior, and restore full function while preserving your natural smile.'
        ],
        [
            'id' => 6,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Sports Mouthguards',
            'slug' => 'sports-mouthguards',
            'image_url' => '/services/mouthguards.jpg',
            'description' => 'Custom sports mouthguards in Melbourne for optimal protection and comfort. The Dentl Studio creates professionally fitted mouthguards for all sports activities, providing superior dental protection compared to over-the-counter options. Protect your teeth, jaw, and smile during athletic activities with our durable, comfortable guards.'
        ],
        [
            'id' => 7,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Children\'s Dentistry',
            'slug' => 'childrens-dentistry',
            'image_url' => '/services/children_check_up.jpg',
            'description' => 'Gentle paediatric dental care in Melbourne for children of all ages. The Dentl Studio creates a friendly, comfortable environment where kids feel safe and relaxed. Our children\'s dentists provide preventive care, dental education, fluoride treatments, and gentle treatment approaches to establish positive dental experiences for life.'
        ],
        [
            'id' => 8,
            'service' => 'General Dentistry',
            'service_slug' => 'general-dentistry',
            'name' => 'Oral Cancer Screenings',
            'slug' => 'oral-cancer-screenings',
            'image_url' => '/services/screening.jpg',
            'description' => 'Comprehensive oral cancer screening services in Melbourne for early detection and prevention. The Dentl Studio provides thorough examinations of your mouth, throat, and surrounding tissues using advanced diagnostic tools. Regular screenings are essential for catching oral cancer in its earliest, most treatable stages.'
        ],

        // Cosmetic Dentistry
        [
            'id' => 9,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Veneers',
            'slug' => 'veneers',
            'image_url' => '/services/veneers.jpg',
            'description' => 'Premium porcelain veneers in Melbourne for a perfect smile transformation. The Dentl Studio crafts custom-made veneers to correct chips, stains, gaps, and misshapen teeth. Our cosmetic dentists use high-quality materials and precision techniques to create natural-looking, durable veneers that enhance your smile\'s beauty and confidence.'
        ],
        [
            'id' => 10,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Teeth Whitening',
            'slug' => 'teeth-whitening',
            'image_url' => '/services/1.jpg',
            'description' => 'Professional teeth whitening treatments in Melbourne for a brighter, more confident smile. The Dentl Studio offers both in-office and take-home whitening options using safe, effective bleaching systems. Achieve dramatically whiter teeth with our professional-grade treatments that deliver superior results compared to over-the-counter products.'
        ],
        [
            'id' => 11,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Smile Makeover',
            'slug' => 'smile-makeover',
            'image_url' => '/services/smile-makeover.jpg',
            'description' => 'Complete smile makeover treatments in Melbourne to transform your appearance. The Dentl Studio combines multiple cosmetic procedures including veneers, crowns, whitening, and orthodontics to create your dream smile. Our cosmetic dentists design personalised treatment plans to address all your aesthetic concerns and boost your confidence.'
        ],
        [
            'id' => 12,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Clear Aligners',
            'slug' => 'clear-aligners',
            'image_url' => '/services/clear-aligners.jpg',
            'description' => 'Invisible clear aligner treatment in Melbourne for discreet teeth straightening. The Dentl Studio offers custom-made clear aligners as an alternative to traditional braces. Achieve straighter teeth with virtually invisible, removable aligners that fit your lifestyle while gradually moving your teeth into perfect alignment.'
        ],
        [
            'id' => 13,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Dental Bonding',
            'slug' => 'dental-bonding',
            'image_url' => '/services/dental-bonding.jpg',
            'description' => 'Cosmetic dental bonding in Melbourne for quick smile improvements. The Dentl Studio uses tooth-coloured composite resin to repair chips, cracks, gaps, and discoloured teeth in a single visit. Our skilled cosmetic dentists sculpt and shape the bonding material to create natural-looking results that blend seamlessly with your smile.'
        ],
        [
            'id' => 14,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Crown Lengthening',
            'slug' => 'crown-lengthening',
            'image_url' => '/services/crown.jpg',
            'description' => 'Crown lengthening procedures in Melbourne to improve your smile\'s proportions. The Dentl Studio performs gum contouring and crown lengthening to expose more of your natural tooth structure, creating a more balanced and aesthetically pleasing smile. This procedure is ideal for treating "gummy smiles" and preparing teeth for restorative work.'
        ],
        [
            'id' => 15,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Dental Contouring',
            'slug' => 'dental-contouring',
            'image_url' => '/services/contouring.jpg',
            'description' => 'Tooth contouring and reshaping services in Melbourne for minor smile adjustments. The Dentl Studio carefully removes small amounts of tooth enamel to correct uneven, overlapping, or irregularly shaped teeth. This conservative cosmetic treatment provides immediate results and can be combined with other procedures for comprehensive smile enhancement.'
        ],
        [
            'id' => 16,
            'service' => 'Cosmetic Dentistry',
            'service_slug' => 'cosmetic-dentistry',
            'name' => 'Cosmetic Injectables & Fillers',
            'slug' => 'cosmetic-injectables-fillers',
            'image_url' => '/services/cosmetic-injectables.jpg',
            'description' => 'Facial aesthetics and cosmetic injectables in Melbourne to complement your dental treatment. The Dentl Studio offers anti-wrinkle injections and dermal fillers to enhance your facial features and reduce signs of aging. Our qualified practitioners provide comprehensive facial rejuvenation treatments alongside your dental care for complete smile and face harmony.'
        ],

        // Restorative Dentistry
        [
            'id' => 17,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Dental Fillings',
            'slug' => 'dental-fillings',
            'image_url' => '/services/fillings.jpg',
            'description' => 'Natural-looking dental fillings in Melbourne to restore decayed or damaged teeth. The Dentl Studio uses tooth-coloured composite and ceramic materials that blend seamlessly with your natural teeth. Our mercury-free fillings provide durable, aesthetic restorations that maintain the strength and appearance of your smile.'
        ],
        [
            'id' => 18,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Inlays and Onlays',
            'slug' => 'inlays-and-onlays',
            'image_url' => '/services/inlays-and-onlays.jpg',
            'description' => 'Precision dental inlays and onlays in Melbourne for moderate tooth damage. The Dentl Studio creates custom-fitted porcelain and ceramic restorations that provide superior strength and aesthetics compared to traditional fillings. These conservative treatments preserve maximum tooth structure while restoring function and appearance.'
        ],
        [
            'id' => 19,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Dental Crowns',
            'slug' => 'dental-crowns',
            'image_url' => '/services/crowns.jpg',
            'description' => 'High-quality dental crowns in Melbourne to restore damaged or weakened teeth. The Dentl Studio offers porcelain, ceramic, and zirconia crowns that provide exceptional strength, durability, and natural appearance. Our custom-made crowns protect your teeth while maintaining optimal function and aesthetics for years to come.'
        ],
        [
            'id' => 20,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Dental Bridges',
            'slug' => 'dental-bridges',
            'image_url' => '/services/bridges.jpg',
            'description' => 'Fixed dental bridges in Melbourne to replace missing teeth and restore your smile. The Dentl Studio creates custom bridges that span gaps left by missing teeth, anchored to adjacent healthy teeth or implants. Our bridges restore chewing function, prevent teeth shifting, and provide a permanent solution for tooth loss.'
        ],
        [
            'id' => 21,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Dental Implants',
            'slug' => 'dental-implants',
            'image_url' => '/services/implants.jpg',
            'description' => 'Permanent dental implant solutions in Melbourne for missing teeth replacement. The Dentl Studio provides titanium implants that fuse with your jawbone to create a stable foundation for crowns, bridges, or dentures. Our implant treatments restore full chewing function and prevent bone loss while providing the most natural tooth replacement option.'
        ],
        [
            'id' => 22,
            'service' => 'Restorative Dentistry',
            'service_slug' => 'restorative-dentistry',
            'name' => 'Dentures',
            'slug' => 'dentures',
            'image_url' => '/services/dentures.jpg',
            'description' => 'Custom dentures in Melbourne for complete or partial tooth replacement. The Dentl Studio creates comfortable, natural-looking dentures using advanced materials and techniques. Our full and partial dentures are precisely fitted to restore your ability to eat, speak, and smile with confidence while maintaining proper facial support.'
        ],

        // Oral Surgery
        [
            'id' => 23,
            'service' => 'Oral Surgery',
            'service_slug' => 'oral-surgery',
            'name' => 'Tooth Extractions',
            'slug' => 'tooth-extractions',
            'image_url' => '/services/extraction.jpg',
            'description' => 'Gentle tooth extraction procedures in Melbourne performed with minimal discomfort. The Dentl Studio uses advanced techniques and sedation options to ensure comfortable extractions when teeth cannot be saved. Our oral surgeons prioritise patient comfort and provide comprehensive aftercare instructions for optimal healing.'
        ],
        [
            'id' => 24,
            'service' => 'Oral Surgery',
            'service_slug' => 'oral-surgery',
            'name' => 'Wisdom Teeth Removal',
            'slug' => 'wisdom-teeth-removal',
            'image_url' => '/services/wisdom-teeth-removal.jpg',
            'description' => 'Expert wisdom teeth removal in Melbourne to prevent crowding and complications. The Dentl Studio offers gentle extraction of problematic wisdom teeth using advanced surgical techniques and sedation options. Our experienced oral surgeons ensure comfortable procedures and smooth recovery for both simple and complex wisdom tooth cases.'
        ],
        [
            'id' => 25,
            'service' => 'Oral Surgery',
            'service_slug' => 'oral-surgery',
            'name' => 'Implant Replacement',
            'slug' => 'implant-replacement',
            'image_url' => '/services/dental-replacement.png',
            'description' => 'Dental implant replacement and revision surgery in Melbourne for failed or damaged implants. The Dentl Studio provides expert implant removal, bone grafting when necessary, and replacement with new implants. Our oral surgeons use advanced techniques to restore your implant function and ensure long-term success.'
        ]
    ];
    $service = collect($services)->firstWhere('slug', $slug);

    if (!$service) {
        abort(404);
    }

    return Inertia::render('service-id', [
        'service' => $service
    ]);
})->name('service.show');


Route::get('/blog/{slug}', [ClientPostController::class, 'show'])
    ->name('blogs.show');
Route::get('/blogs', [ClientPostController::class, 'index'])
    ->name('blogs.index');

Route::get('/sample', function () {

    $post = Post::find(8);

    return response()->json($post);
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        // return Inertia::render('dashboard');
        return to_route('post.index');
    })->name('dashboard');

    Route::get('/medias', [MediaController::class, 'index'])
        ->name('media.index');
    Route::post('/medias', [MediaController::class, 'store'])
        ->name('media.store');
    Route::delete('/medias/${media}', [MediaController::class, 'destroy'])
        ->name('media.destroy');

    Route::get('/post/create', [PostController::class, 'create'])
        ->name('post.create');
    Route::get('/post', [PostController::class, 'index'])
        ->name('post.index');
    Route::post('/post', [PostController::class, 'store'])
        ->name('post.store');
    Route::get('/post/{slug}/edit', [PostController::class, 'edit'])
        ->name('post.edit');
    Route::patch('/post/{post}', [PostController::class, 'update'])
        ->name('post.update');
    Route::delete('/post/{post}', [PostController::class, 'destroy'])
        ->name('post.destroy');

    Route::get('/tags', [TagController::class, 'index'])
        ->name('tag.index');
    Route::post('/tags', [TagController::class, 'store'])
        ->name('tag.store');

    Route::get('/appointments/index', [AppointmentController::class, 'index'])
        ->name('appointment.index');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
