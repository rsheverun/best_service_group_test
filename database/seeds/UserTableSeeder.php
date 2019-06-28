<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'test@test.test',
            'username' => 'test',
            'name' => 'test name',
            'password' => bcrypt('123qwe')
        ]);
    }
}
