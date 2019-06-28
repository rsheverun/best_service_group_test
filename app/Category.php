<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $table = 'category';
    public $primaryKey = 'category_id';

    public function films()
    {
        return $this->belongsToMany('App\Film', 'film_category', 'category_id', 'film_id');
    }
}
