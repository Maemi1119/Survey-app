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
use Illuminate\Support\Facades\Auth;

class QuestionaireController extends Controller
{
    //
    public function lists(Questionaire $questionaire, Question $question, Category $category, User $user){
        $user = Auth::id();
        return Inertia::render('List',[
            'questionaires' =>$questionaire->where('user_id', $user)->get(),
            //'categories' => $category->get()
            ]);
    }
    
    public function showSurvey(Questionaire $questionaire,Category $category,User $user, Answer $answer){
        return Inertia::render('ShowSurvey',[
            'questionaires' =>$questionaire->with('user')->get(),
            //'categories' => $category->get()
            ]);
    }
    
    public function setting(Category $category , Setting $setting){
        return Inertia::render('Setting2',['categories' => $category->get(), 'settings' => $setting->get()]);
    }
    
    public function set(Request $request){
        $user = Auth::id();
        $setting = Questionaire::create([
            'user_id'=>$user,
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
            $set = substr($password['setting_id'], 0, 1);
            Password::create([
               'questionaire_id'=>$setting->id,
               'setting_id'=>$set,
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
            'sett' => $settings->get()
            ]);
    }
    
    public function update(PostRequest $request, Questionaire $post){
        $input_post = $request['post'];
        $input_post = $request['settings'];
        $post->fill($input_post)->save();
        
        return redirect('/preview/' . $questionaire->id);
    }
    
    public function delete(Questionaire $questionaire){
        $questionaire->delete();
        return redirect('/');
    }
    
    public function preview(Questionaire $questionaire, Question $question, Method $method, Choice $choice){
        return Inertia::render('Preview',[
            'questionaires' => $questionaire,
            'questions' => $question->with('choices')->where('questionaire_id', $questionaire->id)->get(),
            'methods' => $method->get(),
            'choices' => $choice->where('question_id', $questionaire->id)->get()
            ]);
    }
    
    public function result(Questionaire $questionaire, Password $password){
        $pass = $password->where('questionaire_id', $questionaire->id)->get();
        $passId = [];
        foreach($pass as $ps){
            array_push($passId, $ps->setting_id);
        }
        if(in_array(6, $passId)){
            return redirect('/beforelook/' . $questionaire->id);
        }
        session(['look'=> true]);
        return redirect('/listok/' . $questionaire->id);
    }
    
    public function resultOK(Questionaire $questionaire, Question $question, Category $category, Password $password, User $user, Answer $answer){
        if(session('look')==true){
            return Inertia::render('Result',[
                'questionaires' => $questionaire->where('id', $questionaire->id)->first(),
                'questions' => $question->with('answers')->where('questionaire_id', $questionaire->id)->get(),
                'categories' => $category->get(),
                'users' => $user->get(),
                'answers' => $answer->where('question_id', $questionaire->id)->get()
            ]);
            session(['look'=> false]);
        }else{
            return redirect('/beforelook/' . $questionaire->id);
        }
    }
    
    public function beforeLook(Questionaire $questionaire){
        return Inertia::render('BeforeList',['questionaires' => $questionaire->where('id', $questionaire->id)->first()]);
    }
    
    public function checkLook(Request $request, Password $password, Questionaire $questionaire){
        $pass = $password->where('questionaire_id', $questionaire->id)->where('setting_id', 6)->first();
            if($pass->password == $request['password']){
                session(['check' => true]);
                return redirect('/listok/'. $questionaire->id);
            }
                return redirect()->back()->withErrors(['missing' => 'パスワードが間違っています']);
            }
    
    public function share(Questionaire $questionaire){
        return Inertia::render('Share',['questionaires' => $questionaire->where('id', $questionaire->id)->first()]);
    }
}
