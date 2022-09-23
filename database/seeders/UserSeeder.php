<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use DateTime;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
                'name' => 'yakiniku',
                'email' => 'test@test.com',
                'password' => Hash::make('yakinikuoisiiyo'),
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
         ]);
    }
}
