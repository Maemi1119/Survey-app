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
        Schema::create('questionaires', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('overview')->nullable()->derault(NULL);
            $table->foreignId('category_id')->constrained('categories')->nullable();
            $table->boolean('show-question-count');
            $table->boolean('is_logined');
            $table->foreignId('user_id')->constrained('users');
            $table->datetime('create_at');
            $table->datetime('updated_at');
            $table->datetime('deleted_at')->nullable()->derault(NULL);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questionaires');
    }
};
