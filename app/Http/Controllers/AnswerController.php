<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;
use App\Models\Questionaire;
use App\Models\Question;

class AnswerController extends Controller
{
    //
    public function answer(Questionaire $questionaire, Question $question, Answer $answer){
        return Inertia::render('AnswerQuestion',[
            'questionaires'=>$questionaire, 
            'questions'=>with('answer')->$question->get(),
            'answer'=>$answer->where('question_id', $questionaire->id)->get()
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
