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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('questionaire_id')->constrained('questionaires')->onDelete('cascade');
            $table->string('question');
            $table->integer('method_id')->unsigned();
            $table->string('bar')->nullable();
            $table->string('bar_left')->nullable();
            $table->string('bar_right')->nullable();
            $table->string('min_value')->nullable();
            $table->string('max_value')->nullable();
            $table->text('data')->nullable();
            $table->integer('max_letter')->nullable();
            $table->integer('min_letter')->nullable();
            $table->boolean('show')->nullable();
            $table->boolean('required')->nullable();
            $table->integer('question_id')->nullable();
            $table->integer('image')->nullable();
            $table->string('branch')->nullable();
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
        Schema::dropIfExists('questions');
    }
};
