<?php

// app/Http/Controllers/LanguageController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function changeLanguage($lang)
    {
        // Imposta la lingua nella sessione
        session(['locale' => $lang]);

        // Imposta la lingua globalmente per l'applicazione
        app()->setLocale($lang);

        return redirect()->back();
    }
}
