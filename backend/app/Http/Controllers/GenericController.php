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
        //return view('dosage.create');
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        
        $generic = Generic::find($id);

        if($generic!=NULL)
        {return response()->json($generic);}
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
}
