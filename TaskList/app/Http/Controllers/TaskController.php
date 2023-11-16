<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $task = Task::all();
        return response()->json([
            'message' => $task->toJson(),
        ], 200);
    }

    public function store(Request $request)
    {
        $task = new Task();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->category_id = $request->category_id;
        $task->status = $request->status;
        $task->save();
        return response()->json([
            'message' => $task->toJson(),
        ], 200);
    }

    public function update(Request $request, $task)
    {
        $task = Task::find($task);
        $task->status = $request->status;
        $task->save();
        return response()->json([
            'message' => $task->toJson(),
        ], 200);
    }

    public function destroy(Request $request, $task)
    {
        $task = Task::find($task);
        $task->delete();
        return response()->json([
            'message' => $task->toJson(),
        ], 200);
    }
}
