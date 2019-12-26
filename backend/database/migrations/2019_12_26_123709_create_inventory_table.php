<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventory', function (Blueprint $table) {
            $table->bigIncrements('inv_id');
            $table->integer('med_id')->unsigned();
            $table->integer('ret_id')->unsigned(); //user_id from user table
            $table->integer('qty')->unsigned();
            $table->string('is_dep');
            $table->integer('res_qty')->unsigned();
            $table->integer('oncall_qty')->unsigned()->nullable();

            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventory');
    }
}
