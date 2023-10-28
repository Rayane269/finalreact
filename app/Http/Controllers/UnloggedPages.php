<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UnloggedPages extends Controller
{
    public function about() {
        return Inertia::render('UserUnlogged/About', []);
    }
}
