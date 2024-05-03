import { Connection } from "@/config/Db"
import Post from "@/models/post"
import { revalidatePath } from "next/cache"



export const getUsersPost = async(params:string,id:string) =>{
    await Connection()
  let posts  = []
  if(params === "all"){
    posts = await Post.find({author:id})
    return posts;
  }
  else if(params === 'published'){
    posts = await Post.find({author:id},{
        status:true
    })
    return posts;
  }else{
    posts = await Post.find({author:id},{
        status:false
    })
    return posts;
  }

  revalidatePath('/dashboard')


 
}