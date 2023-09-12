import axios from "axios";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: Request,
    res: NextApiResponse
) {
    
    // const domain = vercel.deployments.domain;
    let domain = ''

    if (process.env.NODE_ENV === 'development'){
        domain = `${process.env.VERCEL_URL}:5328/api/python`
    } else{
        domain = `https://${process.env.VERCEL_URL}/api/python`;
    }

    // const response = await axios.get(`https://${domain}/api/python`)
    console.log(domain)
    const response = await axios.get(domain)

    return NextResponse.json(response.data)
}