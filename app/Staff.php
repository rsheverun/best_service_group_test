<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Staff extends Authenticatable
{
    public $table = 'staff';
    public $primaryKey = 'staff_id';
    
    use HasApiTokens;
}
