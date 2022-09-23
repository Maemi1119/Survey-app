<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('settings')->insert([
               'setting' => 'パブリック',
        ]);
        DB::table('settings')->insert([
                'setting' => 'プライベート',
         ]);
        DB::table('settings')->insert([
                'setting' => '投稿者(閲覧)',
         ]);
        DB::table('settings')->insert([
                'setting' => '全てのユーザー',
         ]);
        DB::table('settings')->insert([
                'setting' => 'アプリにログインした全てのユーザー',
         ]);
        DB::table('settings')->insert([
                'setting' => '閲覧用パスワードを入力したユーザー',
         ]);
        DB::table('settings')->insert([
                'setting' => '投稿者(分析)',
         ]);
        DB::table('settings')->insert([
                'setting' => '回答を閲覧したすべてのユーザー',
         ]); 
        DB::table('settings')->insert([
                'setting' => '閲覧用パスワードで閲覧した全てのユーザー',
         ]);
        DB::table('settings')->insert([
                'setting' => '分析用パスワードを入力したユーザー',
         ]);
        DB::table('settings')->insert([
                'setting' => 'アンケートの質問',
         ]); 
    }
}
