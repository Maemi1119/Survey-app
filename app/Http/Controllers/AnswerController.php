<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Questionaire;
use App\Models\Question;
use App\Models\LimitedDescription;
use Inertia\Inertia;

class AnswerController extends Controller
{
    //
    public function answer(Questionaire $questionaire, Question $question, Answer $answer, LimitedDescription $limited){
        return Inertia::render('AnswerQuestion',[
            'questionaires'=>$questionaire, 
            'questions'=>$question->with('answer','limiteds')->get(),
            'answer'=>$answer->where('question_id', $questionaire->id)->get(),
            'limiteds'=>$limited->where('question_id', $questionaire->id)->get()
        ]);
    }
    
    public function postAnswer(Request $request, Questionaire $questionaire, Answer $answer){
        foreach($request['answers'] as $answer){
           $question = Question::create([
                'answer'=>$answer,
                'question_id'=>$question->id
            ]);
            } 
    }
    
}
