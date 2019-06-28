<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Actor extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'cat_film_app' => $this->films_count
        ];
    }
}
