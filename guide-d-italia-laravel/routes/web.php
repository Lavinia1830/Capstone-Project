<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('valled_d_aosta');

Route::get('/visite/aosta_romana_e_medievale', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Aosta_romana_e_medievale');
})->middleware(['auth', 'verified'])->name('aosta_romana_e_medievale');

Route::get('/castelli_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Castelli_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('castelli_valle_d_aosta');

Route::get('/visite/forte_di_bard', function () {
    return Inertia::render('Valle_d_Aosta/Forte_di_Bard');
})->middleware(['auth', 'verified'])->name('forte_di_bard');

Route::get('/localita_turistiche', function () {
    return Inertia::render('Valle_d_Aosta/Localita_turistiche');
})->middleware(['auth', 'verified'])->name('localita_turistiche');

Route::get('/territorio', function () {
    return Inertia::render('Valle_d_Aosta/Territorio');
})->middleware(['auth', 'verified'])->name('territorio');

Route::get('/luoghi_visite/il_ponte_romano', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Il_ponte_romano');
})->middleware(['auth', 'verified'])->name('il_ponte_romano');

Route::get('/visite/strada_romana_gallie', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Strada_romana_gallie');
})->middleware(['auth', 'verified'])->name('strada_romana_gallie');

Route::get('/luoghi_visite/arco_d_augusto', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Arco_d_Augusto');
})->middleware(['auth', 'verified'])->name('arco_d_augusto');

Route::get('/luoghi_visite/porta_praetoria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Porta_praetoria');
})->middleware(['auth', 'verified'])->name('porta_praetoria');

Route::get('/luoghi_visite/teatro_romano_di_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Teatro_romano_di_Aosta');
})->middleware(['auth', 'verified'])->name('teatro_romano_di_aosta');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
