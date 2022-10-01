<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Method;
use App\Models\Question;
use App\Models\LimitedDescription;
use Illuminate\Http\Request;
use Datetime;

class QuestionController extends Controller
{
    //
    public function question(Questionaire $questionaire , Method $method){
        return view('create')->with(['questionaire'=>$questionaire, 'methods'=>$method->get()]);
    }
    
    public function create(Request $request, Question $question , Questionaire $questionaire){
        $input = $request['questions'][0];
        $question->fill($input);
        $question->questionaire_id=$questionaire->id;
        $question->save();
        
        foreach($request['limited_descriptions']['limited'] as $limited){
            LimitedDescription::create([
                'limited'=>$limited,
                'question_id'=>$question->id,
                ]);
        }
        return redirect('/setting/' . $questionaire->id);
    }
    
}
