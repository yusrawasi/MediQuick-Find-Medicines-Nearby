<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedGenericTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('med_generic', function (Blueprint $table) {
            $table->bigIncrements('mg_id');
            $table->integer('med_id')->unsigned();
            $table->integer('g_id')->unsigned();
            $table->string('strength');
          //  $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('med_generic');
    }
}
