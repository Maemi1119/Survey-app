<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Category;
use App\Models\Setting;
use App\Models\Password;
use Illuminate\Http\Request;
use Datetime;
use Inertia\Inertia;


class QuestionaireController extends Controller
{
    //
    public function lists(Questionaire $lists){
        return view('list')->with(['lists' => $lists->get()]);  
    }
    
    public function setting(Category $category , Setting $setting){
        return Inertia::render('Setting',['categories' => $category->get(), 'settings' => $setting->get()]);
        //return view('setting')->with(['categories' => $category->get(), 'settings' => $setting->get()]);
    }
    
    public function set(Request $request){
        $setting = Questionaire::create([
            'user_id'=>1,
            'name'=>$request['name'],
            'overview'=>$request['overview'],
            'category_id'=>NULL,
            'show_question_count'=>$request['show_question_count'],
            'is_logined'=>$request['is_logined'],
        ]);
        
        //$setting->settings()->attach($request['settings_radio']);
        
       foreach($request['setting'] as $value){
           $setting->settings()->attach($value);
       }
        //dd($request['passwords']['password']);
        foreach($request['passwords'] as $password){
            Password::create([
               'setting_id'=>$password['setting_id'],
               'password'=>$password['password']
            ]);
        }
           
        return redirect('/createform/' . $setting->id);
    }
    
    public function check(Questionaire $questionaire, Category $category, Password $password, Setting $settings){
        return Inertia::render('Confirm',['questionaires' => $questionaire, 'categories' => $category->get(), 'passwords' => $password->get(), 'settings' => $questionaire->settings()->get(), 'sett'=> $settings->get()]);
        //return view('confirmation')->with(['questionaires' => $questionaire, 'categories' => $category->get(), 'passwords' => $password->where('setting_id',1)->first()]);
    }
    
    public function update(PostRequest $request, Questionaire $post){
        $input_post = $request['post'];
        $input_post = $request['settings'];
        $post->fill($input_post)->save();

        return redirect('/preview/' . $questionaire->id);
    }
}
