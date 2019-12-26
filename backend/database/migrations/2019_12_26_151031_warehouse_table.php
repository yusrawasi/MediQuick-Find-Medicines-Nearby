<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WarehouseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        
        Schema::create('warehouse', function (Blueprint $table) {
            $table->bigIncrements('wh_id');
            $table->integer('u_id')->unsigned();
            $table->string('location_lat')->nullable();
            $table->string('location_long')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('warehouse');
        //
    }
}
