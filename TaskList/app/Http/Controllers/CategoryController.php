<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return response()->json([
            'message' => $category->toJson(),
        ], 200);
    }

    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name;
        $category->owner_id = $request->owner_id;
        $category->save();
        return response()->json([
            'message' => $category->toJson(),
        ], 200);
    }

    public function destroy(Request $request, $category)
    {
        $category = Category::find($category);
        $category->delete();
        return response()->json([
            'message' => $category->toJson(),
        ], 200);
    }

}
