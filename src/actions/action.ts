'use server'
import { Connection } from "@/config/Db";
import User from "@/models/user";
import {put,del,getDownloadUrl} from '@vercel/blob'
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import path from "path";
import bcrypt from 'bcryptjs'


export const addImage = async(formData:FormData)=>{
 await Connection()
const session = cookies().get("session")?.value;
const img = formData.get("image") as File;

let user;
if(session){
  user = JSON.parse(session)
}

const getUser = await User.findById(user.id)

console.log(getUser)

const blob = await put(`profile_pic/${new Date()}/${path.extname(img.name)}`,img,{
    access:"public",
    addRandomSuffix:false
})

getUser.image = blob.url;

getUser.save()


revalidatePath('/profile')

}




export const CurrentUser = async(id:string)=>{
 await Connection()

const getUser = await User.findById(id)

return getUser;


}


export const changePassword = async(formData:FormData) =>{

  await Connection()
  const session = cookies().get('session')?.value;
  let user = null 

  if(session){
    user = JSON.parse(session);
  }
  const password = formData.get("password") as string;
  const newPassword = formData.get("newPassword") as string;
  const cPassword = formData.get("cPassword") as string;

  const currUser = await User.findById(user.id)

  
  
  const comparePass = bcrypt.compare(password,currUser.password)



  if(!comparePass){
    console.log("password did'nt match")
    return;
  }

  if(newPassword !== cPassword){
    console.log("password must match")
    return;
  }

 
  const encPAssword = bcrypt.hashSync(newPassword);

  currUser.password = encPAssword;

  currUser.save()
  console.log("password changed")
  revalidatePath("/profile")
}
