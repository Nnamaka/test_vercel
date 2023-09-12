import axios from "axios";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: Request,
    res: NextApiResponse
) {
    
    console.log(process.env.NODE_ENV)
    const response = await axios.get("http://localhost:5328/api/python")

    return NextResponse.json(response.data)
}