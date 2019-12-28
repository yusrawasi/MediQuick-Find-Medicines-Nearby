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

    // For autocomplete search results
    public function autoComplete(){
        $term = $_GET['term'];
        $brands = Brand::where('b_name', 'LIKE', "%".$term."%")->get();
        return response()->json($brands);
    }
}
