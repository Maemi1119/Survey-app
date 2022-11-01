<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    
    public function answer(){
    return $this->belongsTo(Answer::class);
    }
    
    protected $fillable = [
    'answer_id',
    'image',
    ];
}
