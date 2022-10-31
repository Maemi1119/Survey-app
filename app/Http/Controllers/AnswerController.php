<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Choice;
use App\Models\Questionaire;
use App\Models\Question;
use App\Models\LimitedDescription;
use Inertia\Inertia;

class AnswerController extends Controller
{
    //
    public function beforeAnswer(Questionaire $questionaire, Password $password){
        return Inertia::render('BeforeQuestion',[
            'questionaires' => $questionaire, 
            'passwords' => $password->where('questionaire_id', $questionaire->id)->where('setting_id', 2)->get()
        ]);
    }
    
    public function answer(Questionaire $questionaire, Question $question, Choice $choice, Answer $answer, LimitedDescription $limited){
        return Inertia::render('AnswerQuestion',[
            'questionaires'=>$questionaire, 
            'questions'=>$question->with('answers','limitedDescriptions','choices')->where('questionaire_id', $questionaire->id)->get(),
            'choices'=>$choice->where('question_id', $questionaire->id)->get(),
            'answer'=>$answer->where('question_id', $questionaire->id)->get(),
            'limiteds'=>$limited->where('question_id', $questionaire->id)->get()
        ]);
    }
    
    public function postAnswer(Request $request, Questionaire $questionaire, Question $question, Answer $answer){
        foreach($request['answers'] as $answer){
            Answer::create([
                'answer'=>$answer['answer'],
                'question_id'=>$answer['id'],
                'user_id'=>1
            ]);
            } 
    }
    
}