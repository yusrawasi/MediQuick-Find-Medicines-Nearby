<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //
    protected $table = 'user_role' ;
    protected $fillable = [
        'u_role',
    ];
    public $primaryKey = 'role_id';

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
