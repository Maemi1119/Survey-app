<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionaireController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\AnswerController;
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


Route::get('/', function(){
    return Inertia::render('Index');
});

Route::group(['middleware' => ['auth']], function(){

    {/*アンケートの設定画面*/}
    Route::get('/set', [QuestionaireController::class,'setting']);
    Route::post('/setting', [QuestionaireController::class,'set']);
    
    {/*アンケートの作成画面*/}
    Route::get('/createform/{questionaire}', [QuestionController::class, 'question'])->name('create');
    Route::post('/create/{questionaire}', [QuestionController::class,'create']);
    
    {/*アンケート設定の確認画面*/}
    Route::get('/setting/{questionaire}', [QuestionaireController::class, 'check']);
    Route::put('/setting/', [QuestionaireController::class, 'update']);
    
    {/*プレビュー画面*/}
    Route::get('/preview/{questionaire}', [QuestionaireController::class, 'preview'])->name('preview');
    
    {/*アンケート一覧画面*/}
    Route::get('/list', [QuestionaireController::class,'lists']);
    Route::get('/list/{questionaire}', [QuestionaireController::class,'result']);
    Route::get('/beforelook/{questionaire}', [QuestionaireController::class,'beforeLook']);
    Route::post('/checklook/{questionaire}', [QuestionaireController::class,'checkLook']);
    Route::get('/listok/{questionaire}', [QuestionaireController::class,'resultOK']);
    
    {/*アンケートの削除*/}
    Route::delete('/delete/{questionaire}', [QuestionaireController::class,'delete']);
    
    {/*アンケート共有画面*/}
    Route::get('/share/{questionaire}', [QuestionaireController::class,'share']);

});


{/*アンケート回答画面*/}
Route::get('/show', [QuestionaireController::class,'showSurvey']);
Route::get('/answer/{questionaire}', [AnswerController::class,'beforeAnswer']);
Route::post('/checkpass/{questionaire}', [AnswerController::class,'checkPass']);
Route::get('/startanswer/{questionaire}', [AnswerController::class,'answer']);
Route::post('/postanswer/{questionaire}', [AnswerController::class,'postAnswer']);
Route::inertia('/endanswer', 'EndAnswer');

require __DIR__.'/auth.php';