<?php

use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('status')->insert([

            [
                 
            'status_name' => 'Created',

            ],
            [
                 
                'status_name' => 'Pending',
    
            ],
            [
                 
                'status_name' => 'Fulfilled',
        
            ],
            [
                 
             'status_name' => 'Expired',
            
            ]
           
        ]);
    }
}
