<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    //
  //  public $timestamps = 'false';
    protected $table = 'medicine';
    protected $fillable = [
        'b_id','d_id','m_id', 'price', 'strips_per_packet', 'sku_productCode', 'packaging'

    ];
    public $primaryKey = 'med_id';
    public $timestamps = false;

    public function brand()
    {
        return $this->belongsTo(Brand::class,'b_id');
    }
    
    public function dosageform()
    {
        return $this->belongsTo(DosageForm::class,'d_id');
    }

    
    
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class,'m_id');
    }

    public function genericnames()
    {
       
    return $this->belongsToMany(Generic::class,'med_generic','med_id','g_id')->withPivot('strength');
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
