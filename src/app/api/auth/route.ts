import { Connection } from "@/config/Db";
import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


export  async function POST(req:Request){
  try {
    await Connection()
    console.log("Working")
    const body = await req.json()
    const {username,email,password}=body;
    const user = await User.findOne({email:email});

    if(user){
       return NextResponse.json({message:"user already exist"},{status:400})
    }
  
    const pass = bcryptjs.hashSync(password)

    await User.create({
    username,
    email,
    password
    })
    return NextResponse.json({message:"Account has been created successfully"},{status:201})

  } catch (error) {
    return NextResponse.json({message:"something went wrong",error},{status:500})
  }
}