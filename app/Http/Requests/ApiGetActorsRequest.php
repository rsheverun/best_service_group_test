<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiGetActorsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function validationData()
    {
        return $this->json()->all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_id' => 'required|integer'
        ];
    }

    public function attributes()
    {
        return [
            'category_id' => 'film category'
        ];
    }
}
