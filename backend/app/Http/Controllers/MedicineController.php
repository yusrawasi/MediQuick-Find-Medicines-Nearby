<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medicine;
use App\Generic;
use App\Brand;
use App\Manufacturer;
use App\DosageForm;
use Illuminate\Support\Facades\DB;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    //     $medicines = Medicine::join('brand', 'medicine.b_id', '=', 'brand.b_id')
    //     ->join('dosageform', 'medicine.d_id', '=', 'dosageform.d_id')
    //     ->join('manufacturer', 'medicine.m_id', '=', 'manufacturer.m_id')
    //     //->join('med_generic', 'medicine.d_id', '=', 'med_generic.med_id')
    //     ->select('medicine.*', 'brand.b_name AS brand_name', 'dosageform.d_name AS dosage_name','manufacturer.m_name 
    //     AS manufacturer_name'
        
    //    // ,'med_generic.g_id','med_generic.strength'
    //     )->orderBy('medicine.med_id')
    //     ->get();
        
        $medicines = Medicine::all();
        $MEDI = [];

        foreach($medicines as $MED) {

          // $MED = Medicine::find($medicine->med_id);
           //generic names with strength of a single medicine

            $medgendetail['generics']=[];
            foreach($MED->genericnames as $medigeneric){ //call method genericnames to get gennames
                $medgen['drugname']= $medigeneric->g_name;
                $medgen['strength']= $medigeneric->pivot->strength;
                array_push($medgendetail['generics'], $medgen);
                $medgen =[];
            }//foreach
           


           $med = array (
            'med_id' => $MED->med_id,
            'brand_name' => $MED->brand->b_name,
            'dosage_name' => $MED->dosageform->d_name,
            'manufacturer_name' => $MED->manufacturer->m_name,
            'price' => $MED->price,
            'strips_per_packet' => $MED->strips_per_packet,
            'packaging' => $MED->packaging,
            'sku_productCode' => $MED->sku_productCode,

            'generics' => $medgendetail['generics']
         );

        array_push($MEDI,$med);
        $medgen = []; //empty it before next med
        $med_gen =[]; //empty it before next med
        $medgendetail['generics'] =[];
      

        } //end foreach

        return $MEDI;
         


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {  
        
        $brands = Brand::all();
        $manufacturers = Manufacturer::all();
        $generics= Generic::all();
        $dosageforms = DosageForm::all();
        //return view('dosageforms.create')->with('generics', $generics)->
        //with('manufacturers' ,$manufacturers)->with('brands',$brands)->with('dosageforms',$dosageforms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $validatedData = $request->validate(['b_id' => 'required','d_id' => 'required','m_id' => 'required']);
        $medicine = Medicine::create([
            'b_id'=>    $validatedData['b_id'],
            'd_id' =>    $validatedData['d_id'],
            'm_id' =>   $validatedData['m_id'],
            'price'  => $request['price'],
            'strips_per_packet'  => $request['price'],
            'sku_productCode' => $request['sku_productCode'],
            'packaging' => $request['packaging']
        ]);
        
       /* subarray named med_generics e.g med_generics:[
            ['id'['1'],'strength'['200mg'] ],
            ['id'['2'],'strength'['500mg'] ]   ]; */
        
        //attach in med_generic table along with strength 
        $medigenerics = $request->input('med_generics');

        // foreach( $medigenerics as $med_generic) {
        // $med_generic = DB::table('med_generic')->create([
        //     'med_id' => $medicine->id,
        //     'g_id' => $med_generic['id'],
        //     'strength' => $med_generic['strength']
        // ]);
        // }
        
        foreach($medigenerics as $medigeneric){
            $medgen = Generic::find($medigeneric['id']);
            $medicine->genericnames()->save($medgen,['med_id'=>$medicinee->id,'g_id'=>$medigeneric['id'],
                'strength'=>$medigeneric['strength'] 
            ]);
         }

         return response()->json('Medicine Added');
         
    
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        

       

           $medicine= Medicine::find($id);
           //generic names of a single medicine
           $medgendetail['generics']=[];
            foreach($medicine->genericnames as $medigeneric){ //call method genericnames to get gennames
                $medgen['drugname']= $medigeneric->g_name;
                $medgen['strength']= $medigeneric->pivot->strength;
                array_push($medgendetail['generics'], $medgen);
                $medgen =[];
            }//foreach
           

          
           $med = array (
            'med_id' => $medicine->med_id,
            'brand' => $medicine->brand->b_name,
            'dosage' => $medicine->dosageform->d_name,
            'manufacturer'=> $medicine->manufacturer->m_name,
            'price' => $medicine->price,
            'strips_per_packet' => $medicine->strips_per_packet,
            'packaging' => $medicine->packaging,
            'sku_productCode' => $medicine->sku_productCode,

            'generics' =>$medgendetail['generics'],
         );

     
        $medgen = []; //empty it before next med
        $med_gen =[]; //empty it before next med
      


        return $med;
        
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
        
        // $brand = Brand::find($id);

        // if($brand!=NULL)
        // {return response()->json($brand);}
        // else return;
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
        
        // $brand = Brand::update([
        //     'b_name' => $request->input('name')
        //     ]);

        //     return response()->json('Brand Updated');
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
        $medicine= Medicine::find($id);

        $medigenerics= $medicine->genericnames;
            
            foreach($medigenerics as $medigeneric){
                //$medigeneric = Generic::find($medigeneric);
                $medicine->genericnames()->detach($medigeneric);

            }

            $medicine->delete();
        // if($brand!=NULL)
        // {$brand->delete();
        return response()->json('Medicine deleted');
    }
    
  

    
}
