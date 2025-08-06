import { commonApi } from "./commonAPI"
import { serverURL } from "./serverURL"

// same
// import { commonApi } = require( "./commonAPI")
// import { serverURL } = require( "./serverURL")

// add resume details to the server - POST - reqBody
export const addResumeAPI = async (reqBody)=>{
    return await commonApi("post",`${serverURL}/resumes`, reqBody)
}
// get all resumes
export const getAllResumeAPI = async ()=>{
    return await commonApi("get",`${serverURL}/resumes`)
}

// delete a particular resume
export const deleteAllResumeAPI = async (id)=>{
    return await commonApi("delete",`${serverURL}/resumes/${id}`,"")
}

// get a resume API
export const getResumeAPI = async (id)=>{
    return await commonApi("get",`${serverURL}/resumes/${id}`,"")
}

//  update resume API
export const updateResumeAPI = async(id,reqBody)=>{
    return await commonApi("PUT",`${serverURL}/resumes/${id}`,reqBody)
}