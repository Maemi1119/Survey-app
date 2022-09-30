<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Password extends Model
{
    use HasFactory;
    
    public function setting() {
    return $this->belongsTo(Setting::class);
    }
    
    protected $fillable = [
    'password',
    'setting_id',
    ];
    
}