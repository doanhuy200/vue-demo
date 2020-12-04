<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'PostController@index')->name('posts.index');
Route::get('/{id}', 'PostController@show')->name('posts.show');
Route::post('/store', 'PostController@store')->name('posts.store');
Route::post('/{id}/update', 'PostController@update')->name('posts.update');
Route::delete('/{id}', 'PostController@delete')->name('posts.delete');
