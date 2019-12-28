<?php

use Illuminate\Database\Seeder;

class UserRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //
        DB::table('user_role')->insert([

            [
                 
                'u_role' => 'Company',

            ],
            [
                 
                'u_role' => 'Distributer',
    
            ],
            [
                 
                'u_role' => 'Retailer',
        
            ],
            [
                 
             'u_role' => 'Customer',
            
            ]
           
        ]);
    }
}
