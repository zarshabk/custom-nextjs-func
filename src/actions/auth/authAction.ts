"use server"
import {Connection} from '@/config/Db'
import User from '@/models/user'
import bcryptjs  from 'bcryptjs'
import { error } from 'console'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const CreateUser = async(formData:FormData)=>{
try {
    await Connection()
   // const values = Object.fromEntries(formData);
    
   // const {username,email,password}=values;
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user = await User.findOne({email:email});

    if(user){
       return {
        error:true,
        message:"user already exist"
       }
    }
  
    const pass = bcryptjs.hashSync(password)

    await User.create({
    username,
    email,
    password
    })

   return {error:false,message:"account has been created successfully"}
 
} catch (error:any) {
    return {
        error:true,
        message:"something wen wrong"+error,
       }
}
redirect('/login')
}





export const loginUser = async(formData:FormData)=>{
    try {
        await Connection()

        // const values = Object.fromEntries(formData)

        // const {email,password}=values;

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        const user = await User.findOne({email:email})

        if(!user){
            throw new Error("invalid credentials")
        }
        
        const pass = bcryptjs.compare(password,user.password)

        if(!pass){
            throw new Error("invalid credentials")  
        }

        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        const data = {
            id:user._id,
            username:user.username,
            email:user.email,
            image:user?.image,
            role:user?.role
        }
        
        let cok = cookies().set('session', JSON.stringify(data), {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
            sameSite: 'lax',
            path: '/',
          })
         

     // console.log("session has been set",cok)
          
 

    } catch (error:any) {
        throw new Error(error)
    }

    redirect("/dashboard")
}




export const Logout = async()=>{
    cookies().delete("session")
    redirect('/')
}