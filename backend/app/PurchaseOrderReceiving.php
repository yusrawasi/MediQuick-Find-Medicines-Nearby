<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderReceiving extends Model
{
    //
    protected $table = 'purchase_order_receiving' ;
    protected $fillable = [
        'pod_id', 'expiry_date', 'batch_code',
    ];
    public $primaryKey = 'por_id';

    public function purchaseorderdetails()
    {
        return $this->belongsTo(PurchaseOrderReceiving::class); //one por_id has one pod_id
    } 
}
