<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Google\Cloud\TextToSpeech\V1\TextToSpeechClient;
use Google\Cloud\TextToSpeech\V1\SynthesisInput;
use Google\Cloud\TextToSpeech\V1\VoiceSelectionParams;
use Google\Cloud\TextToSpeech\V1\AudioConfig;
use Google\Cloud\TextToSpeech\V1\SsmlVoiceGender;
use Google\Cloud\TextToSpeech\V1\AudioEncoding;
use App\Http\Controllers\FavoriteController;


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
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/lazio', function () {
    return Inertia::render('Lazio');
});

/*Start Eglish */

    /* Start Lazio */ 

        Route::get('/destinations/lazio/rome', function () {
            return Inertia::render('Lazio/Destinations');
        });

        /* Start Roma */

            Route::get('/view/lazio/rome/colosseum', function () {
                return Inertia::render('Lazio/Views/Monuments/Colosseum');
            });

/*End Eglish */

/*Start Italian */

    Route::get('/accedi', function () {
        return Inertia::render('Auth/Login');
    });

    Route::get('/registrati', function () {
        return Inertia::render('Auth/Register');
    });

    Route::get('/destinazioni/lazio/roma', function () {
        return Inertia::render('Lazio/Destinations/Rome');
    });

/*End Italian */


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

