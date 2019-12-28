<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //
    protected $table = 'status';
    protected $fillable = [
        'status_name',
    ];
    public $primaryKey = 'status_id';

    public function reserveorder()
    {
        return $this->HasMany(ReserveOrder::class);
    }

    public function purchaseOrder()
    {
        return $this->HasMany(PurchaseOrder::class);
    }


}
