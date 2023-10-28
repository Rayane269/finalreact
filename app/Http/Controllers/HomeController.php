<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index() 
    {
        return Inertia::render('Welcome', [
            'userLogged' => Auth::check(),
        ]);
    }
}