<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_questionaireuser', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('questionaireuser_id')->unsigned();
            $table->primary(['user_id', 'questionaireuser_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_questionaireuser');
    }
};
