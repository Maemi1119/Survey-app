<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    
    public function questionaireuser(){
    return $this->belongsToMany('App\Questionaireuser');
    }
    
    public function questionaire(){
    return $this->belongsTo('App/Questionaires');
    }
    
    public function Answers(){
    return $this->belongsToMany('App\Answers');
    }
}
