import React from 'react'
import { Link } from 'react-router-dom'

function ResumeGenerator() {
  return (
    <div>
      <div>
        <h1 className='text-center mt-5'>Generate Your Resume Here</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
      <div className="p-4 rounded shadow bg-white text-center h-100">
        <h4 className="mb-3">Add Your Information</h4>
        <p>Add Pre-Written Examples to each Section</p>
        <h4 className='text-center'>Step1</h4>
      </div>
    </div>

      <div className="col-12 col-md-6 mt-3">
      <div className="p-4 rounded shadow bg-white text-center h-100">
        <h4 className="mb-3">Download Your Resume</h4>
        <p>Download and Start Applying</p>
        <h4 className='text-center'>Step2</h4>
      </div>
    </div>
        </div>
        <div className='d-flex justify-content-center my-3'>
         <Link to={'/form'}> <button className='btn btn-primary my-3 '>Lets Start</button></Link>
        </div>
      </div>

      
    </div>
  )
}

export default ResumeGenerator