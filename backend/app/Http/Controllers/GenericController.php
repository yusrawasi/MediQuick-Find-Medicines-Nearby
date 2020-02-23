<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Generic;

class GenericController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $generic = Generic::orderBy('g_name')->get();

        return $generic ->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        //return view('generic.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate(['name' => 'required',]);
        $generic  = Generic::create([
            'g_name' => $validatedData['name']
            ]);

            return response()->json('Generic Created');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $generic = Generic::find($id);

        if($generic!=NULL)
        {return $generic->toJson();}
        else return;
    }

    public function search($generic_name) //user searches by a  genericname
    {
         
        $generic_id = Generic::where('g_name',$generic_name)->first();
        $genericname = Generic::find($generic_id->g_id);
        $GENERICS=[]; 

            foreach($genericname->medicines as $medicine){  //getting all medicines of a samee generic
                $genericdetail['name'] = $medicine->brand->b_name;
                $genericdetail['manufacturer'] = $medicine->manufacturer->m_name; 
                $genericdetail['dosage'] = $medicine->dosageform->d_name; 
                $genericdetail['price'] = $medicine->price;
                $genericdetail['strips_per_packet'] = $medicine->strips_per_packet;
                $genericdetail['packaging'] = $medicine->packaging;
                $genericdetail['sku_productCode'] = $medicine->sku_productCode;
                $genericdetail['generics'] = [];  
                 //for getting the generics in  different medicine of a same brand(eg syrup and injection of panadol)
            
                foreach($medicine->genericnames as $genericname){

                        $generic['drugname']= $genericname->g_name;
                        $generic['strength']= $genericname->pivot->strength;
                        array_push($genericdetail['generics'], $generic);
                        $generic =[];
                } //end foreach

                array_push($GENERICS,$genericdetail);
                
            }//end foreach
        
        return $GENERICS;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $generic=Generic::find($id)->get();
        //return view(' generic.edit')->with( $generic,'generic');
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $generic = Generic::update([
            'g_name' => $request->input('name')
            ]);

            return response()->json('Generic Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $generic  = Generic::find($id);

        if($generic !=NULL)
        {$generic->delete();
        return response()->json('Generic deleted');}
        else return response()->json('Generic does not exist');
    }


    // For autocomplete search results
    public function autoComplete(){
        $term = $_GET['term'];
        $generics = Generic::where('g_name', 'LIKE', "%".$term."%")->get();
        return response()->json($generics);
    }

    public function searchByGenericId($id) //user searches by a  genericname
    {
         
        
        $genericname = Generic::find($id);
        $GENERICS=[];

            foreach($genericname->medicines as $medicine){  //getting all medicines of the given generic'


                $flag =0;
            
                for($x=0;$x<sizeof($GENERICS);$x++)
                {
                     if($GENERICS[$x]['brand_name']==$medicine->brand->b_name)
                     $flag =1;
                }

                if($flag==0) {

                    $genericdetail['brand_name'] = $medicine->brand->b_name;
                    $genericdetail['manufacturer'] = $medicine->manufacturer->m_name; 
                    array_push($GENERICS,$genericdetail); 
                }
            
                $genericdetail=[];
            }//end foreach

            
        
        return $GENERICS;
    }
}
