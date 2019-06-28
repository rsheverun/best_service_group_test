<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Actor, Film, Category};
use App\Http\Resources\Actor as ActorResource;
use App\Http\Requests\ApiGetActorsRequest;

class ActorController extends Controller
{
    public function __invoke(ApiGetActorsRequest $request)
    {
        $actors = Actor::with('films')->whereHas('films', function($query) use ($request) {
            $query->with('categories')
                ->whereHas('categories', function($query) use ($request) {
                    $query->where('film_category.category_id', $request->category_id);
                });
        })
        ->withCount('films')
        ->orderBy('films_count', 'desc');
        
        // ->sortByDesc('films_count');

        return response([
            'count' => $actors->count(),
            'list' => ActorResource::collection(
                $actors->offset($request->page * $request->perPage)
                        ->limit($request->perPage)
                        ->get()
                ),
            
        ]);

    }
}
