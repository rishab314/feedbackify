import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest,res:NextApiResponse){

    const { currentUser } = await serverAuth(req, res);
    const { body } = await req.json();

    const post = await prisma.post.create({
      data: {
        body,
        userId: currentUser.id
      }
    });

    return Response.json(post);
}
export async function GET(req:NextRequest) {
    const searchparams=req.nextUrl.searchParams;
    const userId=searchparams.get("userId")
      console.log({ userId })

      let posts;

      if (userId && typeof userId === 'string') {
        posts = await prisma.post.findMany({
          where: {
            userId
          },
          include: {
            user: true,
            
          },
          orderBy: {
            createdAt: 'desc'
          },
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
      }

      return Response.json(posts);
}