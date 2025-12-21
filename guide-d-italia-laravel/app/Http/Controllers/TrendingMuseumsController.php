<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class TrendingMuseumsController extends Controller
{
    public function showTrendingMuseums()
    {
        $json = json_decode(File::get(base_path('db.json')), true);
        $tendenze = $json['tendenze'];

        return Inertia::render('TrendingMuseums', [
            'museums' => $tendenze,
        ]);
    }
}
