<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    public $table = 'actor';
    public $primaryKey = 'actor_id';

    public function films()
    {
        return $this->belongsToMany('App\Film', 'film_actor', 'actor_id', 'film_id');
    }
}
