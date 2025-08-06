import axios from "axios"
import { data } from "react-router-dom"

export const commonApi = (httpRequest,url,reqBody)=>{
    const reqConfig = {
        method : httpRequest,
        url,
        data : reqBody
    }
    return axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}