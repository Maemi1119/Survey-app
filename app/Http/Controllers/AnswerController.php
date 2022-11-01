<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Choice;
use App\Models\Password;
use App\Models\Questionaire;
use App\Models\Question;
use App\Models\Image;
use App\Models\Settings;
use App\Models\LimitedDescription;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Cloudinary;

class AnswerController extends Controller
{
    //
    public function beforeAnswer(Questionaire $questionaire, Password $password){
        $settingId = $questionaire->settings()->get(['id']);
        $setNumber = [];
        foreach($settingId as $setting){
            array_push($setNumber, $setting->id);
        }
        return Inertia::render('BeforeAnswer',[
            'questionaires' => $questionaire, 
            'settings' => $setNumber
        ]);
    }
    
    public function checkPass(Request $request, Password $password, Questionaire $questionaire){
        $pass = $password->where('questionaire_id', $questionaire->id)->get();
        $passId = [];
        foreach($pass as $ps){
            array_push($passId, $ps->setting_id);
        }
        if(in_array(2, $passId)){
            $correctPasses = $pass->where('setting_id', 2);
            foreach($correctPasses as $correctPass){
                if($correctPass->password == $request['password']){
                    session(['check' => true]);
                    return redirect('/startanswer/'. $questionaire->id);
                }
            }
            return redirect()->back()->withErrors(['missing' => 'パスワードが間違っています']);
        }
        session(['check' => true]);
        return redirect('/startanswer/'. $questionaire->id);
    }
    
    public function answer(Questionaire $questionaire, Question $question, Choice $choice, Answer $answer, LimitedDescription $limited){
        if (session('check') == true) {
            return Inertia::render('AnswerQuestion',[
                'questionaires'=>$questionaire, 
                'questions'=>$question->with('answers','limitedDescriptions','choices')->where('questionaire_id', $questionaire->id)->get(),
                'choices'=>$choice->where('question_id', $questionaire->id)->get(),
                'answer'=>$answer->where('question_id', $questionaire->id)->get(),
                'limiteds'=>$limited->where('question_id', $questionaire->id)->get()
            ]);
        }else{
            return redirect('/beforeanswer/' . $questionaire->id)->withErrors(['missing' => 'このアンケートに回答するためにはパスワードを入力してください']);
        }
    }
    
    public function postAnswer(Request $request, Questionaire $questionaire, Question $question, Answer $answer){
        session()->forget('check');
        $user = Auth::id();
        dd($request['image']);
        foreach($request['answers'] as $answer){
            Answer::create([
                'answer'=>$answer['answer'],
                'question_id'=>$answer['id'],
                'user_id'=>$user
            ]);
        } 
        dd($request['image']);
        foreach($request['image'] as $image){
            $image_url = Cloudinary::upload($image->file('images')->getRealPath())->getSecurePath();
            Image::create([
                'image'=>$image_url,
                'answer_id'=>$answer['id'],
                'user_id'=>$user
            ]);
        }
    }
    
}