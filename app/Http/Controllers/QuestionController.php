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
    
    public function create(Request $request, Question $question , Questionaire $questionaire){
        $input = $request['questions'][0];
        $question->fill($input);
        $question->questionaire_id=$questionaire->id;
        $question->save();
        
        foreach($request['choices']['choice'] as $choice){
            Choice::create([
            'question_id'=>$question->id,
            'choice'=>$choice,
            ]);
        }
        foreach($request['limited_descriptions']['limited'] as $limited){
            LimitedDescription::create([
            'limited'=>$limited,
            'question_id'=>$question->id,
            ]);
        }
        return redirect('/setting/' . $questionaire->id);
    }
    
}
