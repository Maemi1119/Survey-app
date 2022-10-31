<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Question;
use App\Models\Method;
use App\Models\Choice;
use App\Models\User;
use App\Models\Answer;
use App\Models\Category;
use App\Models\Setting;
use App\Models\Password;
use Illuminate\Http\Request;
use Datetime;
use Inertia\Inertia;


class QuestionaireController extends Controller
{
    //
    public function lists(Questionaire $questionaire,Category $category,User $user, Answer $answer){
        return Inertia::render('List',[
            'questionaires' =>$questionaire->where('user_id', 1)->get(),
            //'categories' => $category->get()
            //'answers' =>  $answer->where()
            
            ]);
    }
    
    public function setting(Category $category , Setting $setting){
        return Inertia::render('Setting2',['categories' => $category->get(), 'settings' => $setting->get()]);
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
        
       foreach($request['setting'] as $value){
           $setting->settings()->attach($value);
       }
       
        foreach($request['passwords'] as $password){
            Password::create([
               'setting_id'=>$password['setting_id'],
               'password'=>$password['password']
            ]);
        }
           
        return redirect('/createform/' . $setting->id);
    }
    
    public function check(Questionaire $questionaire, Category $category, Password $password, Setting $settings){
        return Inertia::render('Confirm',[
            'questionaires' => $questionaire, 
            'categories' => $category->get(), 
            'passwords' => $password->get(), 
            'settings' => $questionaire->settings()->get(), 
            'sett'=> $settings->get()
            ]);
    }
    
    public function update(PostRequest $request, Questionaire $post){
        $input_post = $request['post'];
        $input_post = $request['settings'];
        $post->fill($input_post)->save();
        
        return redirect('/preview/' . $questionaire->id);
    }
    
    public function preview(Questionaire $questionaire, Question $question, Method $method, Choice $choice){
        return Inertia::render('Preview',[
            'questionaires' => $questionaire,
            'questions' => $question->with('choices')->where('questionaire_id', $questionaire->id)->get(),
            'methods' => $method->get(),
            'choices' => $choice->where('question_id', $questionaire->id)->get()
            ]);
    }
    
    public function result(Questionaire $questionaire, Question $question, Category $category, User $user, Answer $answer){
        return Inertia::render('Result',[
                'questionaires' => $questionaire->where('id', $questionaire->id)->first(),
                'questions' => $question->with('answers')->where('questionaire_id', $questionaire->id)->get(),
                'categories' => $category->get(),
                'users' => $user->get(),
                'answers' => $answer->where('question_id', $questionaire->id)->get()
            ]);
    }
    
    public function share(Questionaire $questionaire){
        return Inertia::render('Share',['questionaires' => $questionaire->where('id', $questionaire->id)->first()]);
    }
}
