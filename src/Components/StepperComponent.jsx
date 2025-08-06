import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { TiDeleteOutline } from "react-icons/ti";
import { addResumeAPI } from '../service/allApi';
import { toast } from 'react-toastify';



const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function StepperComponent({ resumeData, setResumeData,setIsFinished,setEditID}) {
  console.log(resumeData);



  const { skills, Name, jobTitle, location, email, phoneNumber, github, linkedin, portfolio, courseName, college, university, year, jobRole, company, companyLocation, duration, summary } = resumeData // destructure
  console.log(`skill array`, skills);


  const [inputSkill, setInputSkill] = useState("")
  console.log(inputSkill);

  const suggestion = ["HTML", "CSS", "ANGULAR", "BOOTSTRAP", "JAVASCRIPT", "TAILWIND", "GIT"]


  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setResumeData({
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
      summary: ""
    })
  };

  const addSkill = (addskill) => {
    console.log("Add skill from add function", addskill);
    if (!addskill) {
      toast.warning(`fill the skill`)
    } else {
      if (skills.includes(addskill)) {
        toast.success(`skill already added..`)
      } else {
        setResumeData({ ...resumeData, skills: [...skills, addskill] })
      }
      setInputSkill("")
    }
  }

  const handleDeleteSkill = (deleteSkill) => {
    console.log(`Delete Skill function`, deleteSkill);
    setResumeData({ ...resumeData, skills: skills.filter((item) => item !== deleteSkill) })
  }

  const handleSubmitResume = async () => {

    if (!skills || !Name || !jobTitle || !location || !email || !phoneNumber || !github || !linkedin || !portfolio || !courseName || !college || !university || !year || !jobRole || !company || !companyLocation || !duration || !summary) {
       toast.warning(`Fill the form completely!`)
    } else {
      try {
        const result = await addResumeAPI(resumeData)
        console.log(result);
        setEditID(result.data.id)
        if (result.status >= 200 && result.status < 300) {
           toast.success(`Resume added successfully`)
          setIsFinished(true)
   
        } else {
        toast.error(`Error in adding resume`)
        }
      } catch (error) {
        console.log(`Server Error, ${error}`);
        toast.error(`Server Error, Please try again !!!`)
      }

    }
  }



  const renderStepperContent = (steps) => {
    switch (steps) {
      case 0: return (
        <>
          <h5>Personal Information</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, Name: e.target.value })}
                value={resumeData.Name}
                // id="standard-multiline-flexible"
                label="Full Name"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })}
                value={resumeData.jobTitle}
                // id="standard-multiline-flexible"
                label="Job Title"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                value={resumeData.location}
                // id="standard-multiline-flexible"
                label="Location"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>

          </Grid>

        </>
      )
      case 1: return (
        <>
          <h5>Contact Details</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                value={resumeData.email}
                // id="standard-multiline-flexible"
                label="Email"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, phoneNumber: e.target.value })}
                value={resumeData.phoneNumber}
                // id="standard-multiline-flexible"
                label="Phone Number"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })}
                value={resumeData.github}
                // id="standard-multiline-flexible"
                label="GitHub Profile Link"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })}
                value={resumeData.linkedin}
                // id="standard-multiline-flexible"
                label="LinkeIn Profile Link"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, portfolio: e.target.value })}
                value={resumeData.portfolio}
                // id="standard-multiline-flexible"
                label="Portfolio Link"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>

          </Grid>

        </>
      )
      case 2: return (
        <>
          <h5>Education Details</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, courseName: e.target.value })}
                value={resumeData.courseName}
                // id="standard-multiline-flexible"
                label="Course Name"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, college: e.target.value })}
                value={resumeData.college}
                // id="standard-multiline-flexible"
                label="College Name"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })}
                value={resumeData.university}
                // id="standard-multiline-flexible"
                label="University"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, year: e.target.value })}
                value={resumeData.year}
                // id="standard-multiline-flexible"
                label="Year of Passout"
                // multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>


          </Grid>

        </>
      )
      case 3: return (
        <>
          <h5>Professional Details</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, jobRole: e.target.value })}
                value={resumeData.jobRole}
                id="standard-multiline-flexible"
                label="Job/Internship"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, company: e.target.value })}
                value={resumeData.company}
                id="standard-multiline-flexible"
                label="Company Name"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, companyLocation: e.target.value })}
                value={resumeData.companyLocation}
                id="standard-multiline-flexible"
                label="Location"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, duration: e.target.value })}
                value={resumeData.duration}
                id="standard-multiline-flexible"
                label="Duration"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>


          </Grid>

        </>
      )
      case 4: return (
        <>
          <h5>Skills & Certifications</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setInputSkill(e.target.value)}
                value={inputSkill}
                id="standard-multiline-flexible"
                label="Add Skill"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth

              />
              <Button onClick={() => addSkill(inputSkill)} className='mt-3' variant='outlined'>ADD + </Button>
            </Grid>
            <div className="">
              <h5>Suggestions : </h5>
              <div className="">
                {
                  suggestion?.map((item) => (
                    <Button onClick={() => addSkill(item)} className='mt-3 me-2' variant='outlined' >{item}</Button>
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
                {
                  skills?.length > 0 ?
                    skills?.map((item) => (
                      <span className='btn btn-primary mb-3 me-3'>{item}
                        <button onClick={() => handleDeleteSkill(item)} className='btn btn-primary'><TiDeleteOutline /></button>
                      </span>
                    )) : ""
                }
              </div>
            </div>

          </Grid>


        </>
      )
      case 5: return (
        <>
          <h5>Professional Summary</h5>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                value={resumeData.summary}
                id="standard-multiline-flexible"
                label="Write a short summary about yourself"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
                rows={4}

              />
            </Grid>


          </Grid>

        </>
      )
      default:
        return null
    }
  }
  return (
    <>

      <Box sx={{ width: '100%', marginBottom: '3%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* <div className='d-flex justify-content-between'> */}
              <Button className='btn btn-danger' onClick={handleReset}>Reset</Button>
              <Button className="btn btn-success" onClick={handleSubmitResume}>Add Resume</Button>
              {/* </div> */}
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            {renderStepperContent(activeStep)}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

    </>
  )
}

export default StepperComponent
