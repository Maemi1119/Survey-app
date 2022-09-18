<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    //
    public function set(Request $request, Password $settings){
        $input = $request['passwards'];
        $settings->fill($input)->save();
    }
}
