<?php

use App\Http\Controllers\Admin\AdminDashbordController;
use App\Http\Controllers\Admin\DashbordController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UnloggedPages;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', [HomeController::class, 'index']);

Route::get('/about', [UnloggedPages::class, 'about']);


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::get('/test', [UserController::class, 'test'])->name('user.test');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/administration',[DashbordController::class,'index'])->name('administration');
    Route::get('admin/dashboard',[AdminDashbordController::class,'index'])->name('admin.dashboard');
    Route::get('admin/test',[AdminDashbordController::class,'test'])->name('admin.test');
});
