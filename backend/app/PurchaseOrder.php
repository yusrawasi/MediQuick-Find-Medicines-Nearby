<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    //
    protected $table = 'purchase_order' ;
    protected $fillable = [
        'from_id', 'to_id', 'created_by', 'po_date_time',	'po_ship_date_time', 'po_status_id',
    ];
    public $primaryKey = 'po_id';

    public function status()
    {
        return $this->belongsTo(Status::class); //for po_status_id
    } 

    public function purchaseorderdetails()
    {
        return $this->HasMany(PurchaseOrderDetails::class);  //one po in many pod
    }
    
    public function from()
    {
        return $this->belongsTo(User::class); //one purchaseorder goes from one dist or company
    }
    
    public function to()
    {
        return $this->belongsTo(User::class); //one purchaseorder goes to one dist or retailer
    } 
    public function createdby()
    {
        return $this->belongsTo(User::class); //one purchaseorder is created by one company dist or retailer
    } 


}
