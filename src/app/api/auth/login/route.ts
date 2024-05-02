import { Connection } from "@/config/Db";
import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { cookies } from "next/headers";


export  async function POST(req:Request){
  try {
    await Connection()
  
    const body = await req.json()
    const {email,password}=body;
    const user = await User.findOne({email:email});

    if(!user){
       return NextResponse.json({message:"invalid credentials"},{status:401})
    }
  
    const pass = bcryptjs.compare(password,user.password)
   
   
    if(!pass){
        return NextResponse.json({message:"invalid credentials"},{status:401})
     }
     
     const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
     const data = {
         id:user._id,
         username:user.username,
         email:user.email,
         image:user?.image,
         role:user?.role
     }
     
     cookies().set('session', JSON.stringify(data), {
         httpOnly: true,
         secure: true,
         expires: expiresAt,
         sameSite: 'lax',
         path: '/',
       })
      
    return NextResponse.json({message:"user login successfully"},{status:200})

  } catch (error) {
    return NextResponse.json({message:"something went wrong",error},{status:500})
  }
}