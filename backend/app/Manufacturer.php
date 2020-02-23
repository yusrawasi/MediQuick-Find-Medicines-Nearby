<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
{
    //
    protected $table = 'manufacturer';
    protected $fillable = [
        'm_name',
    ];
    public $primaryKey = 'm_id';
    public $timestamps = false;

    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }
}
