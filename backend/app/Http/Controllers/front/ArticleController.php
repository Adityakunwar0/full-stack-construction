<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
     // This method will return all active Articles
    public function index(){
        $articles = Article::orderBy('created_at','DESC')
                    ->where('status',1)
                    ->get();
         return response()->json([
                'status' => true,
                'data' => $articles
            ]);
    }

    // This method will return latest active articles
    public function latestArticles(Request $request){
        $articles = Article::where('status',1)
                   ->take($request->get('limit'))
                   ->orderBy('created_at','DESC')->get();
        return response()->json([
                'status' => true,
                'data' => $articles
            ]);
    }
    public function article($id){
        $article= Article::find($id);

        if($article == null){
            return response()->json([
                'status' => false,
                'data' => "Article not found"
            ]);

        }
         return response()->json([
                'status' => true,
                'data' => $article
            ]);
    }
}
