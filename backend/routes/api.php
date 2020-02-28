<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/hello', function () {
//     return 'Hello World';
// });

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::get('open', 'HomeController@open');

Route::group(['middleware' => ['jwt.verify']], function() {
  Route::get('user', 'UserController@getAuthenticatedUser');
  Route::get('closed', 'HomeController@closed');
});


Route::get('world', 'HomeController@hello');
Route::get('test', 'HomeController@hello');
Route::resource('brand', 'BrandController');
Route::get('brand/{id}/delete','BrandController@destroy');
Route::get('brand/{brand_name}/search','BrandController@search');
//Route::get('brand/search','BrandController@search');

Route::resource('dosage', 'DosageFormController');
Route::get('dosage/{id}/delete','DosageFormController@destroy');

Route::resource('generic', 'GenericController');
Route::get('generic/{generic_name}/search','GenericController@search');
Route::get('generic/{id}/delete','GenericController@destroy');
Route::get('generic/{id}/searchid','GenericController@searchByGenericId');


Route::resource('manufacturer', 'ManufacturerController');
Route::get('manufacturer/{id}/delete','ManufacturerController@destroy');


Route::resource('medicine', 'MedicineController');

Route::get('medicine/{id}/delete','MedicineController@destroy');
Route::get('medicine/{id}/alternate','MedicineController@alternateMedicines');

Route::get('search/brand','BrandController@autoComplete');
Route::get('search/generic','GenericController@autoComplete');
