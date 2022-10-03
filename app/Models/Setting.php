<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;
    
    public function passwords()   
    {
    return $this->hasMany(Password::class);  
    }
    
    public function questionaires()   {
    return $this->belongsToMany(Questionaire::class);  
    }
    
    protected $fillable = [
        'setting',
    ];
}
