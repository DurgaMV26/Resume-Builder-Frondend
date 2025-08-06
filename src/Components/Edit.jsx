import React from 'react'
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { getResumeAPI, updateResumeAPI } from '../service/allApi';
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from 'react-toastify';


function Edit({ EditID , setResumeData}) {
  console.log(EditID);


  const [editResumeData, setEditResumeData] = useState(
    {
      Name: "",
      jobTitle: "",
      location: "",
      email: "",
      phoneNumber: "",
      github: "",
      linkedin: "",
      portfolio: "",
      courseName: "",
      college: "",
      university: "",
      year: "",
      jobRole: "",
      company: "",
      companyLocation: "",
      duration: "",
      skills: [],
      summary: "",
      id: ""

    }
  )

  const [editInputSkill,setEditInputSkill]=useState("")



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getEditResume()
  }


  const getEditResume = async () => {
    try {
      const result = await getResumeAPI(EditID)
      console.log(result);
      setEditResumeData(result.data)
    } catch (error) {
      console.log(error);

    }
  }
  console.log(editResumeData);

 const handleDeleteSkill = (deleteSkill) => {
    console.log(`Delete Skill function`, deleteSkill);
    setEditResumeData({ ...editResumeData, skills: editResumeData.skills.filter((item) => item !== deleteSkill) })
  }

const addSkill = (addskill) => {
    console.log("Add skill from add function", addskill);
    if (!addskill) {
      toast.warning(`fill the skill`)
    } else {
      if (editResumeData.skills.includes(addskill)) {
        toast.success(`skill already added..`)
      } else {
        setEditResumeData({ ...editResumeData, skills: [...editResumeData.skills, addskill] })
      }
      setEditInputSkill("")
    }
  }

  const handleUpdate = async() =>{
    try{
      const result = await updateResumeAPI(EditID,editResumeData)
      console.log(result);
      setResumeData(result.data)
      handleClose()
      
    }catch(error){
      console.log(error);
      
    }
  }

  return (
    <div>
      {/* <button className='btn btn-primary'><CiEdit /></button> */}
      <button className='btn btn-primary' onClick={handleShow}>
        <CiEdit />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>RESUME EDIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-3'>
            <h5>Personal Information</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Full Name"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.Name}
                  onChange={(e) => setEditResumeData({ ...editResumeData, Name: e.target.value })}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Job Title"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.jobTitle}
                  onChange={(e) => setEditResumeData({ ...editResumeData, jobTitle: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Location"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.location}
                  onChange={(e) => setEditResumeData({ ...editResumeData, location: e.target.value })}


                />
              </Grid>

            </Grid>
          </div>

          <div className='mt-3'>
            <h5>Contact Details</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Email"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.email}
                  onChange={(e) => setEditResumeData({ ...editResumeData, email: e.target.value })}


                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Phone Number"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.phoneNumber}
                  onChange={(e) => setEditResumeData({ ...editResumeData, phoneNumber: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="GitHub Profile Link"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.github}
                  onChange={(e) => setEditResumeData({ ...editResumeData, github: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="LinkeIn Profile Link"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.linkedin}
                  onChange={(e) => setEditResumeData({ ...editResumeData, linkedin: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Portfolio Link"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.portfolio}
                  onChange={(e) => setEditResumeData({ ...editResumeData, portfolio: e.target.value })}

                />
              </Grid>

            </Grid>
          </div>

          <div className='mt-3'>
            <h5>Education Details</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Course Name"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.courseName}
                  onChange={(e) => setEditResumeData({ ...editResumeData, courseName: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="College Name"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.college}
                  onChange={(e) => setEditResumeData({ ...editResumeData, college: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="University"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.university}
                  onChange={(e) => setEditResumeData({ ...editResumeData, university: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  // id="standard-multiline-flexible"
                  label="Year of Passout"
                  // multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.year}
                  onChange={(e) => setEditResumeData({ ...editResumeData, year: e.target.value })}

                />
              </Grid>


            </Grid>
          </div>

          <div className='mt-3'>
            <h5>Professional Details</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Job/Internship"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.jobRole}
                  onChange={(e) => setEditResumeData({ ...editResumeData, jobRole: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Company Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.company}
                  onChange={(e) => setEditResumeData({ ...editResumeData, company: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Location"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.companyLocation}
                  onChange={(e) => setEditResumeData({ ...editResumeData, companyLocation: e.target.value })}

                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Duration"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.duration}
                  onChange={(e) => setEditResumeData({ ...editResumeData, duration: e.target.value })}

                />
              </Grid>


            </Grid>
          </div>

          <div className='mt-3'>
            <h5>Skills & Certifications</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Write a short summary about yourself"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editInputSkill}
                  onChange={(e)=>setEditInputSkill(e.target.value)}

                />
                <Button onClick={()=>addSkill(editInputSkill)} className='mt-3' variant='outlined'>ADD + </Button>
              </Grid>
              <div className="">
                <h5>Selected Skills: </h5>
                <div className="">
                  {
                    editResumeData?.skills.map((item) => (<span className='btn btn-primary mb-3 me-3'>{item}<Button onClick={() => handleDeleteSkill(item)} className='me-2 ms-3 text-white fs-3  '><TiDeleteOutline /></Button></span>


                    ))
                  }
                  {/* <Button className='mt-3 me-2' variant='outlined' >html</Button>
                  <Button className='mt-3 me-2' variant='outlined' >css</Button>
                  <Button className='mt-3 me-2' variant='outlined' >bootstrap</Button>
                  <Button className='mt-3 me-2' variant='outlined' >tailwind</Button>
                  <Button className='mt-3 me-2' variant='outlined' >react</Button>
                  <Button className='mt-3 me-2' variant='outlined' >javascript</Button>
                  <Button className='mt-3 me-2' variant='outlined' >angular</Button>
                  <Button className='mt-3 me-2' variant='outlined' >mongodb</Button>
                  <Button className='mt-3 me-2' variant='outlined' >java</Button>
                  <Button className='mt-3 me-2' variant='outlined' >git</Button>
                  <Button className='mt-3 me-2' variant='outlined' >express</Button> */}
                </div>
                <div className="mt-3">
                  <h5>Added Skills : </h5>
                </div>
              </div>

            </Grid>
          </div>

          <div className='mt-3'>
            <h5>Professional Summary</h5>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Write a short summary about yourself"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={editResumeData?.summary}
                  onChange={(e) => setEditResumeData({ ...editResumeData, summary: e.target.value })}

                  rows={4}

                />
              </Grid>


            </Grid>

          </div>






        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button onClick={handleUpdate} className='btn btn-success' variant="primary">Update</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit