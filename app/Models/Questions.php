<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;
    
    public function Questionaire(){
    return $this->hasOne('App/Questionaires');
    }
    
    public function Answer(){
    return $this->belongsTo('App/Answers');
    }
    
    public function method(){
    return $this->hasOne('App/Methods');
    }
    
    public function images(){
    return $this->belongsTo('App/Images');
    }
    
    public function limited_descriptions(){
    return $this->belongsTo('App/Limited_descriptions');
    }
}
