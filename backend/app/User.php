<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $table = 'users';
    protected $fillable = [
        'u_name', 'email', 'password','u_role_id','location_lat','location_long','contact','acc_address','opening_at','closing_at',
    ];
    public $primaryKey = 'u_id';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function inventories()
    {
        return $this->HasMany(Inventory::class);  //one useri.e ret manages many inv items
    }
    //to many  order and many inv item for each order

    public function warehouse()
    {
        return $this->hasOne(Warehouse::class); //one user has one wh
    }
}
