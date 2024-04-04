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
    return Inertia::render('Welcome'/* , [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ] */);
});

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
    return Inertia::render('Valle_d_Aosta/Visite/Forte_di_Bard');
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

Route::get('/luoghi_visite/criptoportico_forense', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Criptoportico_Forense');
})->middleware(['auth', 'verified'])->name('criptoportico_forense');

Route::get('/luoghi_visite/cinta_muraria', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cinta_muraria');
})->middleware(['auth', 'verified'])->name('cinta_muraria');

Route::get('/luoghi_visite/collegiata_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Collegiata_di_sant_orso');
})->middleware(['auth', 'verified'])->name('collegiata_di_sant_orso');

Route::get('/luoghi_visite/cattedrale_di_santa_maria_assunta', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Cattedrale_di_Santa_Maria_Assunta');
})->middleware(['auth', 'verified'])->name('cattedrale_di_santa_maria_assunta');

Route::get('/luoghi_visite/affreschi_ottoniani', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Affreschi_ottoniani');
})->middleware(['auth', 'verified'])->name('affreschi_ottoniani');

Route::get('/gite_scolastiche_scuola_primaria', function () {
    return Inertia::render('Valle_d_Aosta/Gite_scolastiche_scuola_primaria');
})->middleware(['auth', 'verified'])->name('gite_scolastiche_scuola_primaria');

Route::get('/luoghi_visite/basilica_paleocristiana_di_san_lorenzo', function () {
    return Inertia::render('Valle_d_Aosta/Luoghi_visite/Basilica_paleocristiana_S_Lorenzo');
})->middleware(['auth', 'verified'])->name('basilica_paleocristiana_di_san_lorenzo');

Route::get('/articoli/cosa_vedere_ad_aosta_in_un_giorno', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_vedere_Aosta_in_un_giorno');
})->middleware(['auth', 'verified'])->name('cosa_vedere_ad_aosta_in_un_giorno');

Route::get('/contatti_guida_turistica_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Contatti_guida_turistica_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('contatti_guida_turistica_valle_d_aosta');

Route::get('/articoli/cosa_visitare_aosta_romana', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Cosa_visitare_aosta_romana');
})->middleware(['auth', 'verified'])->name('cosa_visitare_aosta_romana');

Route::get('/articoli/aosta_medievale_tra_spiritualita_e_arte', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Aosta_medievale_tra_spiritualità_e_arte');
})->middleware(['auth', 'verified'])->name('aosta_medievale_tra_spiritualita_e_arte');

Route::get('/articoli/orari_siti_romani_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Orari_siti_romani_Aosta');
})->middleware(['auth', 'verified'])->name('orari_siti_romani_aosta');

Route::get('/visite/ponte_romano_pont_saint_martin', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Ponte_romano_pont_saint_martin');
})->middleware(['auth', 'verified'])->name('ponte_romano_pont_saint_martin');

Route::get('/visite/fiera_sa_orso', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Fiera_di_SantOrso_Aosta');
})->middleware(['auth', 'verified'])->name('fiera_sa_orso');

Route::get('/fiera_di_sant_orso', function () {
    return Inertia::render('Valle_d_Aosta/Fiera_di_Sant_Orso');
})->middleware(['auth', 'verified'])->name('fiera_di_sant_orso');

Route::get('/artigianato_in_valle_d_aosta_una_tradizione_millenaria', function () {
    return Inertia::render('Valle_d_Aosta/Artigianato_tradizione_millenaria');
})->middleware(['auth', 'verified'])->name('artigianato_in_valle_d_aosta_una_tradizione_millenaria');

Route::get('/visite/museo_del_tesoro', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Museo_del_tesoro');
})->middleware(['auth', 'verified'])->name('museo_del_tesoro');

Route::get('/musei_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Musei_Aosta');
})->middleware(['auth', 'verified'])->name('museo_aosta');

Route::get('/visite/castello_gamba', function () {
    return Inertia::render('Valle_d_Aosta/Visite/Castello_Gamba');
})->middleware(['auth', 'verified'])->name('castello_gamba');

Route::get('/i_castelli_della_valle_d_asota_piu_belli_da_visitare', function () {
    return Inertia::render('Valle_d_Aosta/I_Castelli_piu_belli_Valle_d_Aosta');
})->middleware(['auth', 'verified'])->name('i_castelli_della_valle_d_asota_piu_belli_da_visitare');

Route::get('/castello_di_ussel', function () {
    return Inertia::render('Valle_d_Aosta/Castello_di_Ussel');
})->middleware(['auth', 'verified'])->name('castello_di_ussel');

Route::get('/chatillon_cosa_vedere', function () {
    return Inertia::render('Valle_d_Aosta/Chatillon_cosa_vedere');
})->middleware(['auth', 'verified'])->name('chatillon_cosa_vedere');

Route::get('/le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta', function () {
    return Inertia::render('Valle_d_Aosta/Articoli/Le_passeggiate_lungo_i_ru_della_valle_d_aosta');
})->middleware(['auth', 'verified'])->name('le_piu_belle_passeggiate_lungo_i_ru_della_valle_d_aosta');






























Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
