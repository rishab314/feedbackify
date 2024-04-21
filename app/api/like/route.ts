import serverAuth from "@/libs/serverAuth";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
export async function POST(req:NextRequest,res:NextApiResponse){
    const {postId}=  await req.json()
    const {currentUser} = await serverAuth(req,res)
    if (!postId || typeof postId !== 'string') {
        throw new Error('Invalid ID');
    }
    const post = await  prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    if (!post) {
        throw new Error('Invalid ID');
    }
    let updatedlikedids = [...(post.likedIds||[])]
    updatedlikedids.push(currentUser.id)
    const updatedPost = await prisma.post.update({
        where: {
          id: postId
        },
        data: {
          likedIds: updatedlikedids
        }
      });
    return Response.json(updatedPost )
}
export async function DELETE(req:NextRequest,res:NextApiResponse) {
    const {postId}=  await req.json()
    const {currentUser} = await serverAuth(req,res)
    if (!postId || typeof postId !== 'string') {
        throw new Error('Invalid ID');
    }
    const post = await  prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    if (!post) {
        throw new Error('Invalid ID');
    }
    let updatedlikedids = [...(post.likedIds||[])]
    updatedlikedids= updatedlikedids.filter((likedId) => likedId !== currentUser?.id);
    const updatedPost = await prisma.post.update({
        where: {
          id: postId
        },
        data: {
          likedIds: updatedlikedids
        }
      });
    return Response.json(updatedPost)
}