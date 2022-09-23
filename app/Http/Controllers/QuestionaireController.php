<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Category;
use Illuminate\Http\Request;
use DateTime;


class QuestionaireController extends Controller
{
    //
    public function lists(Questionaire $lists)
    {
        return view('list')->with(['lists' => $lists->get()]);  
    }
    
    public function setting(Category $category)
    {
        return view('setting')->with(['categories' => $category->get()]);;
    }
    
    public function set(Request $request)
    {
       $setting = Questionaire::create([
           'user_id'=>1,
           'name'=>$request['post']['name'],
           'overview'=>$request['post']['overview'],
           'category_id'=>NULL,
           'show-question-count'=>$request['post']['show-question-count'],
           'is_logined'=>$request['post']['is_logined'],
           ]);
           
           foreach($request['settings'] as $value){
               $setting->settings()->attach($value);
           }
           
        return redirect('/settings/' . $setting->id);
    }
}
