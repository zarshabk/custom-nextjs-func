'use client'
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

export default function useLogin(url:string){
    const [loading,setLoading]=useState(false)


    const loadData = async(data:any)=>{
        setLoading(true)
        try{

            const resp = await axios.post(url,data)
            setLoading(false)

            return resp.data;

        }catch(e:any){
         setLoading(false)

         return toast.error(e?.response?.data?.message)
        }
    }

    return {loadData,loading}
}