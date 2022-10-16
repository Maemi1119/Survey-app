<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Method;
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
        return Inertia::render('Create',['questionaires'=>$questionaire, 'methods'=>$method->get()]);
        //return view('create')->with(['questionaire'=>$questionaire, 'methods'=>$method->get()]);
    }
    
    public function create(Request $request, Questionaire $questionaire, Method $method){
        $question = Question::create([
                "question"=>$request['question'],
                "method_id"=>$request['method'],
                "limited"=>$request['limited'],
                "min_value"=>$request['min_value'],
                "max_value"=>$request['max_value'],
                "bar_left"=>$request['bar_left'],
                "bar_right"=>$request['bar_right'],
                "data"=>$request['data'],
                'questionaire_id'=>$questionaire->id,
            ]);
        // $input = $request['questions'];
        // $question->fill($input);
        // $question->questionaire_id=$questionaire->id;
        // $question->save();
        
        foreach($request['choice'] as $choice){
            Choice::create([
            'question_id'=>$question->id,
            'choice'=>$choice,
            ]);
        }
        foreach($request['limited'] as $limited){
            LimitedDescription::create([
            'limited'=>$limited,
            'question_id'=>$question->id,
            ]);
        }
        return redirect('/setting/' . $questionaire->id);
    }
    
}
