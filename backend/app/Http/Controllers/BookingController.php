<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\bookings;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    function addBooking(Request $request) {

        DB::beginTransaction();

        try {
            $booking = new bookings;
            $booking->customer_id = $request->input('customer_id');
            $booking->room_id = $request->input('room_id');
            $booking->save();

            DB::commit();

            return response()->json("success", 200);
        }

        catch(\Exception $e) {

            DB::rollBack();

            return response()->json(["message"=>$e->getMessage()], 500);
        }
    }
}
