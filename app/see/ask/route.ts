import axios from "axios";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: Request,
    res: NextApiResponse
) {

    // const domain = vercel.deployments.domain;
    let domain = ''

    if (process.env.NODE_ENV === 'development') {
        let holdurl = process.env.VERCEL_URL!.split(':')

        if (holdurl?.length === 3) {
            holdurl.pop()
            domain = `${holdurl[0] + holdurl[1]}:5328/api/python`
        } else
            domain = `${process.env.VERCEL_URL}:5328/api/python`


    } else {
        domain = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/python`;
    }

    // const response = await axios.get(`https://${domain}/api/python`)
    if (domain.includes(':3000'))
        domain = domain.replace(':3000','')

    domain = 'http://' + domain
    console.log(domain)
    const response = await axios.get(domain)

    return NextResponse.json(response.data)
}