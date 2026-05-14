<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    //This method will return all testimonials
    public function index(){
        $testimonials = Testimonial::where('status',1)->orderBy('created_at','DESC')->get();
         return response()->json([
                'status' => true,
                'data' => $testimonials
            ]);
    }
}
