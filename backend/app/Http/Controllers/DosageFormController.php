<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DosageForm;

class DosageFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $dosage = DosageForm::orderBy('d_name')->get();

        return $dosage ->toJson();
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
        $dosage  = DosageForm::create([
            'd_name' => $validatedData['name']
            ]);

            return response()->json('DosageForm Created');

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

        $dosage = DosageForm::find($id);

        if($dosage!=NULL)
        {return $dosage->toJson();}
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
        
        $dosage = DosageForm::find($id);

        if($dosage!=NULL)
        {return response()->json($dosage);}
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
        
        $dosage  = DosageForm::update([
            'd_name' => $request->input('name')
            ]);

            return response()->json('DosageForm Updated');
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
        $dosage  = DosageForm::find($id);

        if($dosage !=NULL)
        {$dosage->delete();
        return response()->json('DosageForm deleted');}
        else return response()->json('DosageForm does not exist');
    }
}
