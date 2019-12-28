<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DosageForm extends Model
{
    //
    protected $table = 'dosageform';
    protected $fillable = [
        'd_name',
    ];
    public $primaryKey = 'd_id';

    public function medicines()
    {
        return $this->hasMany(Medicine::class);
    }
}
