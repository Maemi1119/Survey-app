<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionaires extends Model
{
    use HasFactory;
    
    public function questionaireusers(){
    return $this->belongsToMany('App/Questionaireuser');
    }
    
    public function user(){
    return $this->hasOne('App/Users');
    }
    
    public function questions(){
    return $this->belongsTo('App/Questions');
    }
}
