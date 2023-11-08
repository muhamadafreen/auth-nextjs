import { connect } from "@/dbConfig/dbConfig";
import getDatafromToken from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDatafromToken(request);
    if (userId) {
      const user = await User.findOne({ _id: userId }).select("-password");
      return NextResponse.json({ message: "User found", data: user });
    }
  } catch (error: any) {
    console.log("error :>> ", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
