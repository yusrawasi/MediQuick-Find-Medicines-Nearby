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
    public $timestamps = false;

    public function medicines()
    {
        return $this->belongsToMany(Medicine::class,'med_generic','g_id','med_id')->withPivot('strength');
    }
}
