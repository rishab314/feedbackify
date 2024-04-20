import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest,res:NextApiResponse) {
   
        const { currentUser } = await serverAuth(req, res);
    
        return Response.json(currentUser);
     
}