<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReserveOrderDetails extends Model
{
    //
    protected $table = 'reserve_order_details' ;
    protected $fillable = [
        'or_id','inv_id','qty',
    ];
    public $primaryKey = 'rod_id';

    //one rod_id has one od_id and one inv_id
    public function reserveorder()
    {
        return $this->belongsTo(ReserveOrder::class);
    }

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }
}
