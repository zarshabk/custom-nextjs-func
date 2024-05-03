import { Connection } from "@/config/Db"
import { Lekton } from "next/font/google";
import { cookies } from "next/headers";
import Post from "@/models/post"
import { put } from "@vercel/blob";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req:Request){

    try {
        await Connection();

        const session = cookies().get("session")?.value
        let user = null;
        if(session){
           user = JSON.parse(session);
        }


       // const body = await req.json();
       const body = await req.formData();

         console.log("body ",body)
        //const {title,image,description,cat} = body;

        const title = body.get('title');
        const description = body.get('description');
        const image = body.get("image")
        const cat = body.get('cat')
        
        const slug = ``;

        let blob = null 

        if(image){
            
            blob = await put(`post-file/${new Date()}/${path?.extname(image.name)}`,image,{
                access:"public",
                addRandomSuffix:false
            })


        }

        await Post.create({
            author:user?.id,
            slug:title,
            title,
            description,
            cat,
            image:blob?.url || ""

        })


        return NextResponse.json({message:"Post has been created successfullt"},{status:201})


    } catch (error:any) {
        throw new Error(error)
    }
}