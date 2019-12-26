<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    //
    protected $table = 'medicine';
    protected $fillable = [
        'b_id','d_id','m_id', 'price', 'strips_per_packet', 'sku_productCode',

    ];
    public $primaryKey = 'med_id';

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    
    public function dosageform()
    {
        return $this->belongsTo(DosageForm::class);
    }

    
    
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    public function genericnames()
    {
       
    return $this->belongsToMany(Generic::class,'medigeneric','medi_id','g_id')->withPivot('strength');
    }

    public function inventory()
    {
        return $this->HasMany(Inventory::class);   //one med may go in more than one inv item
    }

    public function purchaseorderdetails()
    {
        return $this->hasMany(PurchaseOrderDetails::class); //one medid in many po details
    } 

    public function warehouse_details()
    {
        return $this->hasMany(WarehouseDetails::class); //one medid in many warehouse details
    } 


}
