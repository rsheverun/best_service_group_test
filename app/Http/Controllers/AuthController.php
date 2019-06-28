<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = [
            'password' => $request->password
        ];
        $request->username ? $credentials['username'] = $request->username : 
        $credentials['email'] = $request->email;
        if (auth()->attempt($credentials)) {
            $token = auth()->user()->createToken('TestToken')->accessToken;

            return response()->json(['token' => $token], 200);
        } else {
            return response()->json([
                'message' => 'Your credentials is invalid'
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        auth('api')->user()->token()->revoke();

        return response()->json([
            'message' => 'Thank you for using application'
        ]);
    }
}
