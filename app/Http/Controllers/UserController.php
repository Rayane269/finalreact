<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() {
        if(!auth()->user()->is_admin){
            return Inertia::render('Dashboard');
        }

        elseif(auth()->user()->is_admin){
            return to_route('admin.dashboard');
        }

    }
    
    public function test(){
        if(!auth()->user()->is_admin){
            return "c'est le test user";
        }

        elseif(auth()->user()->is_admin){
            return to_route('admin.dashboard');
        }
    }
}
