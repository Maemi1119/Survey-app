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
            $table->string('overview')->nullable()->default(NULL);
            $table->foreignId('category_id')->nullable()->constrained('categories');
            $table->boolean('show_question_count');
            $table->boolean('is_logined');
            $table->foreignId('user_id')->constrained('users');
            $table->boolean('provision')->default(0);
            $table->timestamps();
            $table->softDeletes();
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
