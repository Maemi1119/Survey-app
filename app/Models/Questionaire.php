<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionaire extends Model
{
    use HasFactory;
    
    public function questionaireUsers(){
    return $this->hasMany(QuestionaireUser::class);
    }
    
    public function user(){
    return $this->belongsTo(User::class);
    }
    
    public function questions(){
    return $this->hasMany(Question::class);
    }
    
    public function category(){
    return $this->belongsTo(Category::class);
    }
    
    public function settings(){
    return $this->belongsToMany(Setting::class);  
    }
    
    protected $fillable = [
    'user_id',
    'name',
    'overview',
    "category_id",
    'show-question-count',
    'is_logined',
    ];

}
