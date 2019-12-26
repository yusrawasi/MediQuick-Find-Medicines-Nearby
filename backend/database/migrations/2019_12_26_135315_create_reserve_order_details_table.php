<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReserveOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reserve_order_details', function (Blueprint $table) {
            $table->bigIncrements('ror_id');
            $table->integer('or_id');
            $table->integer('inv_id'); //will give the ret_id
            $table->integer('qty');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reserve_order_details');
    }
}
