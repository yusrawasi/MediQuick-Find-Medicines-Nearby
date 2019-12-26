<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicineTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicine', function (Blueprint $table) {
            $table->bigIncrements('med_id');
            $table->integer('b_id')->unsigned();
            $table->integer('d_id')->unsigned();
            $table->integer('m_id')->unsigned();
            $table->string('price');
            $table->integer('strips_per_packet')->unsigned();
            $table->string('sku_productCode');

         
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medicine');
    }
}
