<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Method;
use App\Models\Answer;
use App\Models\Question;
use App\Models\Choice;
use App\Models\LimitedDescription;
use Illuminate\Http\Request;
use Datetime;
use Inertia\Inertia;

class QuestionController extends Controller
{
    //
    public function question(Questionaire $questionaire , Method $method){
        return Inertia::render('CreateQuestions',['questionaires'=>$questionaire, 'methods'=>$method->get()]);
    }
    
    public function create(Request $request, Questionaire $questionaire, Method $method){
        foreach($request['questions'] as $q){
           $question = Question::create([
                "question"=>$q['question'],
                "method_id"=>$q['method'],
                "limited"=>$q['limited'],
                "min_value"=>$q['min_value'],
                "max_value"=>$q['max_value'],
                "bar_left"=>$q['bar_left'],
                "bar_right"=>$q['bar_right'],
                "data"=>$q['data'],
                'image'=>$q['image'],
                'questionaire_id'=>$questionaire->id,
            ]);
        
            foreach($q['choice'] as $choice){
                Choice::create([
                'question_id'=>$question->id,
                'choice'=>array_values($choice)[0],
                ]);
            }
            foreach($q['limited'] as $limited){
                LimitedDescription::create([
                'limited'=>$limited,
                'question_id'=>$question->id,
                ]);
            } 
        }
        
    }
    
    public function result(Questionaire $questionaire, Question $question, Method $method,Answer $answer){
        return Inertia::render('Result',[
            'questionaires'=>$questionaire,
            'questions'=>with('answers')->$question->get(),
            'methods'=>$method->get(),
            'answers'=>$answer->where('question_id',$questionaire->id)->get()
        ]);
    }
}
