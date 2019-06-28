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
Route::post('login', 'AuthController@login');

Route::group(['middleware' => 'auth:api'], function () {

    Route::group(['prefix' => 'get'], function () {
        Route::post('actors', 'ActorController');
        Route::get('categories', 'CategoryController@index');
    });
    
    Route::post('logout', 'AuthController@logout');

});

