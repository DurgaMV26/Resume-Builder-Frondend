import React from 'react'
import Divider from '@mui/material/Divider';
import { FaDownload } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Preview({resumeData,EditID,setResumeData,isFinished}) {
  console.log(resumeData);
  
  const downloadPDF = async()=>{
    const input = document.getElementById("result") // to get the id
    const canvas = await html2canvas(input,{scale:2}) // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("image/png") // convert canvas to image url

    // create pdf
    const pdf = new jsPDF("p","mm","a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,"png",0,0,pdfWidth,pdfHeight)
    pdf.save("resume.pdf")
  }

  return (
    <>
    <div className='d-flex justify-content-end gap-3 mt-5'>
      {isFinished &&
     <div>
        <button onClick={downloadPDF} className='btn btn-primary'><FaDownload /></button>
       
        <Edit EditID={EditID} setResumeData={setResumeData}/>
     </div>}
      <Link to={'/history'}><button className='btn btn-primary'><FaHistory /></button></Link>
      <button className='btn btn-primary'>Back</button>
    </div>
      <div id='result' className="mx-5 my-3 shadow px-5 pb-5">
        
        <div>



          <div className="text-center">

            <h2 className="">{resumeData?.Name||`Name`}</h2>
            <span className="pt-2 text-primary">{resumeData?.jobTitle||`Job Title`}</span>
          </div>
          <div className="text-center mt-2">
            <h6>{resumeData?.phoneNumber||`Phone Number`} |{resumeData?. email||`Email`} |{resumeData?.  location||`Location`}</h6>
          </div>
          <div className="text-center mt-2">
            <a className='me-3 ms-3' href={resumeData?. github} >GitHub</a>|
            <a className='me-3 ms-3' href={resumeData?. linkedin}>LinkedIn</a>|
            <a className='me-3 ms-3' href={resumeData?. portfolio}>Portfolio</a>
            
          </div>
        </div>
        <div className="mt-3">
          <Divider>Summary</Divider>
          <p style={{ textAlign: "justify" }}>{resumeData?.summary||`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
        </div>
        <div className="mt-3 text-center">
          <Divider>Education</Divider>
          <h6 className='mt-2'>{resumeData?.courseName||`Course Name`}</h6>
          <h6>{resumeData?.college||`College Name`} | {resumeData?.university||`University`} |{resumeData?.year||`Year of Passout`} </h6>
        </div>
        <div className="mt-3 text-center">
          <Divider>Professional Experience</Divider>
          <h6 className='mt-2'>{resumeData?.jobRole||`Job Role`}</h6>
          <h6>{resumeData?.company||`Company Name`} |{resumeData?.companyLocation||`Company Location`}  |{resumeData?.duration||`Duration of Course`} </h6>
        </div>
        <div className="mt-3 text-center">
          <Divider>Skills</Divider>
          <div className='mt-2'>
{
  resumeData.skills.map((item)=> <button className='me-2 mt-2 btn btn-primary'>{item}</button>)
}

            {/* <button className='me-2 mt-2 btn btn-primary'>REACT</button>
            <button className='me-2 mt-2 btn btn-primary'>ANGULAR</button>
            <button className='me-2 mt-2 btn btn-primary'>TAILWIND</button>
            <button className='me-2 mt-2 btn btn-primary'>BOOTSTRAP</button>
            <button className='me-2 mt-2 btn btn-primary'>REACT</button>
            <button className='me-2 mt-2 btn btn-primary'>REACT</button>
            <button className='me-2 mt-2 btn btn-primary'>REACT</button> */}





          </div>

        </div>
      </div>
    </>
  )
}

export default Preview
