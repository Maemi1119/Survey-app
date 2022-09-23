<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('methods')->insert([
               'method' => '選択',
        ]);
        DB::table('methods')->insert([
                'method' => '自由記述',
         ]);
        DB::table('methods')->insert([
                'method' => '制限付き自由記述',
         ]);
        DB::table('methods')->insert([
                'method' => 'バー',
         ]);
        DB::table('methods')->insert([
                'method' => 'データのアップロード',
         ]);
    }
}
