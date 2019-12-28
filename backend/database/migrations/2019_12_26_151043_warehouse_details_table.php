<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WarehouseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('warehouse_details', function (Blueprint $table) {
            $table->bigIncrements('whd_id');
            $table->integer('wh_id')->unsigned();
            $table->integer('med_id')->unsigned();
            $table->date('expiry_date');
            $table->string('batch_code');
            $table->string('product_code');
            $table->integer('qty')->unsigned();
            
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        
        Schema::dropIfExists('warehouse_details');
    }
}
