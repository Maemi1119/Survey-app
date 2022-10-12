<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionaireController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PasswordController;
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


/*Route::get('/', function () {
    return view('create');
}); */


Route::get('/', function(){
    return Inertia::render('Account');
});
//Route::get('/', [QuestionaireController::class,'setting']);
//Route::post('/setting', [QuestionaireController::class,'set']);

Route::get('/createform/{questionaire}', [QuestionController::class, 'question']);
Route::post('/create/{questionaire}', [QuestionController::class,'create']);

Route::get('/setting/{questionaire}', [QuestionaireController::class, 'check']);
Route::put('/setting/{questionaire}', [QuestionaireController::class, 'update']);


//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';