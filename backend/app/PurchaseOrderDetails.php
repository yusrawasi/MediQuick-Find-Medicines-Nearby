<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderDetails extends Model
{
    //
    protected $table = 'purchase_order_details' ;
    protected $fillable = [
        'po_id', 'med_id', 'ordered_qty',	'promised_qty','delivered_qty',
    ];
    public $primaryKey = 'pod_id';

    public function purchaseorderreceiving()
    {
        return $this->HasMany(PurchaseOrderReceiving::class); // one podid in many por
    } 

    public function purchaseorder()
    {
        return $this->belongsTo(PurchaseOrderDetails::class);  //one pod_id has one poid
    }
    
    
    public function medicine()
    {
        return $this->belongsTo(Medicine::class); //one purchaseorderdetails contains one medicineid
    } 
}
