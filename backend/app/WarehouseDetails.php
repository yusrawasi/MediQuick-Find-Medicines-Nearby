<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WarehouseDetails extends Model
{
    //
    //
    protected $table = 'warehouse_details';
    protected $fillable = [
        	'wh_id', 'med_id', 'expiry_date', 'batch_code',	'product_code',	'qty',
    ];
    public $primaryKey = 'whd_id';

    public function warehousedetails()
    {
        return $this->belongsTo(Warehouse::class); //one warehousedetail belongs to one warehouse
    }
    
    public function medicine()
    {
        return $this->belongsTo(Medicine::class); //one warehousedetail has one medid
    }
}
