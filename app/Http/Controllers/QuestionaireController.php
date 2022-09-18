<?php

namespace App\Http\Controllers;

use App\Models\Questionaire;
use App\Models\Category;
use Illuminate\Http\Request;

class QuestionaireController extends Controller
{
    //
    public function lists(Questionaire $lists)
    {
        return view('list')->with(['lists' => $lists->get()]);  
    }
    
    public function setting(Category $category)
    {
        return view('setting')->with(['categories' => $category->get()]);;
    }
    
    public function set(Request $request, Questionaire $settings)
    {
        $input = $request['post'];
        $settings->fill($input)->save();
        return redirect('/settings/' . $settings->id);
    }
}
