<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Get a list of categories
     * 
     * @return json App\Category
     */
    public function index()
    {
        return response()->json(Category::all());
    }
}
