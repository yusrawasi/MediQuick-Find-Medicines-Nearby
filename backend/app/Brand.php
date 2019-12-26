<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    //
    protected $table = 'brand';
    protected $fillable = [
        'name',
    ];
    public $primaryKey = 'b_id';
    
    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }
}
