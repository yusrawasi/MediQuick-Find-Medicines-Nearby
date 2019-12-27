<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    //
    protected $table = 'brand';
    protected $fillable = [
        'b_name',
    ];
    public $primaryKey = 'b_id';
    
    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }
}
