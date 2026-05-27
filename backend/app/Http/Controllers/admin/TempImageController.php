<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpg,png,jpeg,gif'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        try {
            $image = $request->image;
            $ext = $image->getClientOriginalExtension();
            $imageName = strtotime('now') . '.' . $ext;

            // ✅ Ensure directories exist
            $tempDir  = public_path('uploads/temp');
            $thumbDir = public_path('uploads/temp/thumb');

            foreach ([$tempDir, $thumbDir] as $dir) {
                if (!File::exists($dir)) {
                    File::makeDirectory($dir, 0755, true);
                    Log::info("Created directory: $dir");
                }
            }

            // ✅ Save to DB first
            $model = new TempImage();
            $model->name = $imageName;
            $model->save();
            Log::info("TempImage saved to DB with id: {$model->id}");

            // ✅ Move original image
            $image->move($tempDir, $imageName);
            Log::info("Image moved to: $tempDir/$imageName");

            // ✅ Create thumbnail
            $sourcePath = $tempDir . '/' . $imageName;
            $destPath   = $thumbDir . '/' . $imageName;

            $manager = new ImageManager(new Driver());
            $img = $manager->read($sourcePath);
            $img->coverDown(300, 300);
            $img->save($destPath);
            Log::info("Thumbnail saved to: $destPath");

            return response()->json([
                'status'  => true,
                'data'    => $model,
                'message' => 'Image uploaded successfully'
            ]);

        } catch (\Exception $e) {
            // ✅ Return 200 with error details instead of crashing with 500
            Log::error("TempImage upload failed: " . $e->getMessage());
            return response()->json([
                'status'  => false,
                'message' => 'Upload failed: ' . $e->getMessage()
            ]);
        }
    }
}