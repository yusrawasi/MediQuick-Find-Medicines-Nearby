<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->bigIncrements('u_id');
            $table->string('u_name');
            $table->string('u_email')->nullable();
            $table->string('u_pw')->nullable();
            $table->integer('u_role_id')->unsigned();
            $table->string('location_lat')->nullable();
            $table->string('location_long')->nullable();
            $table->string('contact');
            $table->string('acc_address')->nullable();
            $table->time('opening_at')->nullable();
            $table->time('closing_at')->nullable();

          



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
        Schema::dropIfExists('user');
    }
}
