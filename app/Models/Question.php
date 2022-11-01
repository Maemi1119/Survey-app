<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    
    public function questionaire(){
    return $this->belongsTo(Questionaire::class);
    }
    
    public function answers(){
    return $this->hasMany(Answer::class);
    }
    
    public function method(){
    return $this->hasOne(Method::class);
    }
    
    public function limitedDescriptions(){
    return $this->hasMany(LimitedDescription::class);
    }
    
    public function choices(){
    return $this->hasMany(Choice::class);
    }
    
    protected $fillable = [
        'question',
        'method_id',
        'max_value',
        'min_value',
        'bar',
        'bar_left',
        'bar_right',
        'data',
        'max_letter',
        'min_letter',
        'show',
        'required',
        'question_id',
        'questionaire_id',
        'method_id',
        'image',
        'branch',
        
    ];
}
