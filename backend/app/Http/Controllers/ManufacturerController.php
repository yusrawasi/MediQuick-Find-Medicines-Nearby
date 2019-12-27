<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Manufacturer;

class ManufacturerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $manufacturer = Manufacturer::orderBy('m_name')->get();

        return $manufacturer ->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        //return view('manufacturer.create');
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
        $manufacturer  = Manufacturer::create([
            'm_name' => $validatedData['name']
            ]);

            return response()->json('Manufacturer Created');

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

        $manufacturer = Manufacturer::find($id);

        if($manufacturer!=NULL)
        {return $manufacturer->toJson();}
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
        
        $manufacturer = Manufacturer::find($id);

        if($manufacturer!=NULL)
        {return response()->json($manufacturer);}
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
        
        $manufacturer = Manufacturer::update([
            'm_name' => $request->input('name')
            ]);

            return response()->json('Manufacturer Updated');
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
        $manufacturer  = Manufacturer::find($id);

        if($manufacturer !=NULL)
        {$manufacturer->delete();
        return response()->json('Manufacturer deleted');}
        else return response()->json('Manufacturer does not exist');
    }
}
