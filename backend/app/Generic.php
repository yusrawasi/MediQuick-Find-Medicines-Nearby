<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Generic extends Model
{
    //
    protected $table = 'generic';
    protected $fillable = [
        'g_name',
    ];
    public $primaryKey = 'g_id';

    public function medicines()
    {
        return $this->belongsToMany(Medicine::class,'medigeneric','g_id','med_id')->withPivot('strength');
    }
}
