import { Connection } from "@/config/Db"
import Post from "@/models/post"
import { revalidatePath } from "next/cache"



export const getUsersPost = async(params:string,id:string) =>{
    await Connection()
  let posts  = []
  if(params === "all"){
    posts = await Post.find({author:id})
  }
  else if(params === 'published'){
    posts = await Post.find({author:id},{
        status:true
    })
  }else{
    posts = await Post.find({author:id},{
        status:false
    })
  }

  revalidatePath('/dashboard')
  console.log("users posts",posts)
  return posts;

 
}