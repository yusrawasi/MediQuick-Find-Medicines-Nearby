<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    //
    protected $table = 'inventory';
    protected $fillable = [
        'med_id','ret_id','qty','is_dep','res_qty','oncall_qty',
    ];
    public $primaryKey = 'inv_id';

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);  //one inv item has only one medid
    }

    public function retailer()
    {
        return $this->belongsTo(User::class);  //one inv item has only one retid
    }

    //to one customer for many order and many inv item
     
    public function reserveorderdetails()
    {
        return $this->HasMany(ReserveOrderDetails::class);  //one inv item can be in many orderdetails
    }
}
