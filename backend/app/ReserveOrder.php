<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReserveOrder extends Model
{
    //
    protected $table = 'reserve_order' ;
    protected $fillable = [
        'status_id','order_date','delivery','customer_id',
    ];
    public $primaryKey = 'or_id';

    public function status()
    {
        return $this->belongsTo(Status::class);
    } 

    public function reserveorderdetails()
    {
        return $this->HasMany(ReserveOrderDetails::class);
    }
   
    public function customer()
    {
        return $this->belongsTo(User::class);
    }
    //one reserve order is reserved by one user and has many inv items (mapped in resorder details)

}
