<?php

namespace App\Services;

use App\Models\Todo;
use Illuminate\Support\Facades\Lang;

class TodoService
{
    public function getAllTodos()
    {
        $todos = Todo::orderBy('created_at', 'desc')->get();

        if ($todos->isEmpty()) {
            return ["message" => "Todo list not found"];
        }
    
        return $todos;
    }

    public function createTodo(array $data)
    {
        $todo = Todo::create($data);
        $message = Lang::get('messages.todo_created');
        return ['message' => $message];
    }

    public function getTodoById(Todo $todo)
    {
        return $todo;
    }

    public function updateTodo(Todo $todo, array $data)
    {
        $todo->update($data);
        $message = Lang::get('messages.todo_updated');
        return ['message' => $message, 'todo' => $todo];
    }

    public function deleteTodo(Todo $todo)
    {
        $todo->delete();
        $message = Lang::get('messages.todo_deleted');
        return ['message' => $message];
    }
}
