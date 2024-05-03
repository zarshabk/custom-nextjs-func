'use server'
import { Connection } from "@/config/Db";
import User from "@/models/user";
import {put,del,getDownloadUrl} from '@vercel/blob'
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import path from "path";
import bcrypt from 'bcryptjs'


export const addImage = async(state:any,formData:FormData)=>{
 await Connection()
const session = cookies().get("session")?.value;
const img = formData.get("image") as File;



if(!img){
  return {message:"Please add image",succes:false}
}
let user;
if(session){
  user = JSON.parse(session)
}

const getUser = await User.findById(user.id)

console.log(getUser)
let blob:any="";
if(!img.name){
  return {message:"Please insert image",succes:false}

}


blob = await put(`profile_pic/${new Date()}/${path.extname(img.name)}`,img,{
  access:"public",
  addRandomSuffix:false
})

getUser.image = blob.url;

getUser.save()


revalidatePath('/profile')

return {message:"Image updated sucessfully",succes:true}


}




export const CurrentUser = async(id:string)=>{
 await Connection()

const getUser = await User.findById(id)

return getUser;


}


export const changePassword = async(state:any,formData:FormData) =>{

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
   
    return {message:"please enter correct password",success:false};
  }

  if(newPassword !== cPassword){
    return {message:"your new password does not match with the confirm password",success:false}
  }

 
  const encPAssword = bcrypt.hashSync(newPassword);

  currUser.password = encPAssword;

  currUser.save()

  revalidatePath("/profile")

  return {message:"password changed sucessfully",success:true}
}
