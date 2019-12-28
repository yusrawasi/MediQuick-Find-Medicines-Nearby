<?php

namespace App\Http\Controllers;
//use Yajra\Datatables\Datatables;


use Illuminate\Http\Request;
use App\Brand;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $brand = Brand::orderBy('b_name')->get();

        return $brand->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        //return view('brands.create');
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
        $brand = Brand::create([
            'b_name' => $validatedData['name']
            ]);

            return response()->json('Brand Created');

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
        
        $brand = Brand::find($id);

        if($brand!=NULL)
        {return $brand->toJson();}
        else return;
    }

    public function search($brand_name) //user searches by a  brandname
    {
         
        $brand_id = Brand::where('b_name',$brand_name)->first();
        $brand = Brand::find($brand_id->b_id);
        $BRANDS=[]; 

            foreach($brand->medicines as $medicine){  //getting all medicines of a samee brand
                $branddetail['name'] = $brand->b_name;
                $branddetail['manufacturer'] = $medicine->manufacturer->m_name; 
                $branddetail['dosage'] = $medicine->dosageform->d_name; 
                $branddetail['price'] = $medicine->price;
                $branddetail['strips_per_packet'] = $medicine->strips_per_packet;
                $branddetail['packaging'] = $medicine->packaging;
                $branddetail['sku_productCode'] = $medicine->sku_productCode;
                $branddetail['generics'] = [];  
                 //for getting the generics in  different medicine of a same brand(eg syrup and injection of panadol)
            
                foreach($medicine->genericnames as $genericname){

                        $generic['drugname']= $genericname->g_name;
                        $generic['strength']= $genericname->pivot->strength;
                        array_push($branddetail['generics'], $generic);
                        $generic =[];
                } //end foreach

                array_push($BRANDS,$branddetail);
                
            }//end foreach
        
        return $BRANDS;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        
        $brand = Brand::find($id);

        if($brand!=NULL)
        {return response()->json($brand);}
        else return;
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
        
        $brand = Brand::update([
            'b_name' => $request->input('name')
            ]);

            return response()->json('Brand Updated');
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
        $brand = Brand::find($id);

        if($brand!=NULL)
        {$brand->delete();
        return response()->json('Brand deleted');}
        else return response()->json('Brand does not exist');
    }
}
