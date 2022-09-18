<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function set(Request $request, Category $settings){
        $input = $request['categories'];
        $settings->fill($input)->save();
    }
}
