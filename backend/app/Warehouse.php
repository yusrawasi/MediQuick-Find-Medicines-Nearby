<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    //
    protected $table = 'warehouse';
    protected $fillable = [
        	'u_id',	'location_lat', 'location_long',
    ];
    public $primaryKey = 'wh_id';

    public function warehousedetails()
    {
        return $this->HasMany(WarehouseDetails::class); //one warehouse has many details
    }
}
