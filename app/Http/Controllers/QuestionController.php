<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    public function question(){
        return view('create');
    }
    
    public function create(Request $request, Question $question){
        $input = $request['questions'];
        $question->fill($input)->save();
        return redirect();
    }
    
}
