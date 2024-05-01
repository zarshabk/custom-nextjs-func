"use server"
import {Connection} from '@/config/Db'
import User from '@/models/user'
import bcryptjs  from 'bcryptjs'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const CreateUser = async(formData:FormData)=>{
try {
    await Connection()
    const values = Object.fromEntries(formData);
    
    const {username,email,password}=values;

    const user = await User.findOne({email:email});

    if(user){
       throw new Error("user already exist")
    }
  
    const pass = bcryptjs.hashSync(password)

    await User.create({
    username,
    email,
    password
    })

   
 
} catch (error:any) {
    throw new Error(error)
}
redirect('/login')
}





export const loginUser = async(formData:FormData)=>{
    try {
        await Connection()

        const values = Object.fromEntries(formData)

        const {email,password}=values;
        
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