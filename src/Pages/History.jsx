import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteAllResumeAPI, getAllResumeAPI } from '../service/allApi';
import { MdDelete } from "react-icons/md";

function History() {


  const [resumeData, setResumeData] = useState([])

  const getResume = async () => {
    //api call
    // const result = await getAllResumeAPI()
    // console.log(result);

    // using try catch
    try {
      const result = await getAllResumeAPI()
      console.log(result);
      setResumeData(result.data)

    } catch {
      console.log(error);

    }
  }
  console.log(resumeData);

const handleDeleteResume= async(id)=>{
//  console.log(id);
  try{
    const result = await deleteAllResumeAPI(id)
    console.log(result);
    getResume()
  }catch(error){
    console.log(error);
    
  }
}

  useEffect(() => {
    getResume()
  }, [])




  return (
    <>
      <div className="py-3 container">
        <h1 className="text-center py-4">Resume Download History</h1>
        <div className="d-flex justify-content-end me-3"><Link to={'/'}><button className='btn btn-primary mb-3'>Back</button></Link></div>
        <div className="row">
          {
            resumeData?.length > 0 ? (
              resumeData?.map((item) => (
                <div className="col-md-3 mb-3">
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <button className='btn' onClick={()=>handleDeleteResume(item?.id)} ><MdDelete /></button>

                      <Card.Title>{item?.Name}</Card.Title>

                      <Card.Subtitle className="mb-2 text-muted">{item?.jobTitle}</Card.Subtitle>
                      <Card.Title>{item?.courseName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item?.college}|{item?.university} |{item?.year}</Card.Subtitle>

                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : "No resume added"
          }


        </div>
      </div>
    </>
  )
}

export default History