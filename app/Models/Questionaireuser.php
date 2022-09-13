<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionaireuser extends Model
{
    use HasFactory;
    
    public function users(){
    return $this->belongsToMany('App\Users');
    }
    
    public function questionaire(){
    return $this->belongsToMany('App/Questionaires');
    }
}
