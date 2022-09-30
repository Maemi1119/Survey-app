<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{
    //
    public function set(Request $request){
        $passwords = Password::create([
           'password'=>$request['passwords']['password'],
           'setting_id'=>1,
        ]);
        
        
    }
}
