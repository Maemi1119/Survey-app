<?php

namespace App\Http\Controllers;

use App\Models\Questionaires;
use Illuminate\Http\Request;

class QuestionairesController extends Controller
{
    //
    public function lists(Questionaires $lists)
    {
        return view('list')->with(['lists' => $lists->get()]);  
    }
}
