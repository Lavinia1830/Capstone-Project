<?php

// app/Http/Middleware/SetLocale.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        $locale = $request->get('lang', 'it'); // Se non c'è 'lang', imposta la lingua predefinita su 'it'
        app()->setLocale($locale);

        return $next($request);
    }
}
