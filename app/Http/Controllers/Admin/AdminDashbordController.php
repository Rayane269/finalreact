<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashbordController extends Controller
{
    public function index()
    {

        if(auth()->user()->is_admin){
            return Inertia::render('Admin/Dashboard');
        }

        else{
            abort(403);
        }
    }

    public function test(){
        if(auth()->user()->is_admin){
            return "valeur des admin";
        }
        else{
            abort(403);
        }
    }


}
