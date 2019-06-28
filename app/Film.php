<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public $table = 'film';
    public $primaryKey = 'film_id';

    public function actors()
    {
        return $this->belongsToMany('App\Actor', 'film_actor', 'film_id', 'actor_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'film_category', 'film_id', 'category_id');
    }
}
