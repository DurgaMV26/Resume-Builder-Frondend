import React, { useState } from 'react'
import StepperComponent from '../Components/StepperComponent'
import Preview from '../Components/Preview'


function Form() {
    const [resumeData,setResumeData] = useState({
        Name : "",
        jobTitle : "",
        location : "",
        email : "",
        phoneNumber : "",
        github : "",
        linkedin : "",
        portfolio : "",
        courseName : "",
        college : "",
        university : "",
        year : "",
        jobRole : "",
        company : "",
        companyLocation : "",
        duration : "",
        skills : [],
        summary : ""

    })

    const [isFinished,setIsFinished] = useState(false)

    const [EditID,setEditID]=useState("")

    return (
        <>

            <div className="container mt-5">
                {
                    isFinished?
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-md-6">
                            <Preview isFinished={isFinished}  resumeData={resumeData} EditID={EditID} setResumeData={setResumeData} />
                        </div>
                        <div className="col-3"></div>
                    </div>
                :
                <div className="row">
                    <div className="col-md-6">
                        <StepperComponent setEditID={setEditID} resumeData={resumeData} setResumeData={setResumeData} setIsFinished={setIsFinished}/>
                    </div>
                    <div className="col-md-6">
                        <Preview resumeData={resumeData} />
                    </div>
                </div>
}
            </div>

        </>
    )
}

export default Form