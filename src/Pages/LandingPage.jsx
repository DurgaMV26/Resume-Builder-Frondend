import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <div className="position-relative text-center">
        <img src='/LandingPage.jpg' alt="Landing Page" className='img-fluid w-100 d-block' style={{  height: 'auto', maxHeight: '600px', objectFit: 'cover' }} />
        <div className=" position-absolute top-50 start-50 translate-middle p-4 bg-transparent border rounded shadow landing-card">
          <h2 className='text-center'>Showcase your skills. Tell your story. Land your next job.</h2>
          <Link to={"/ResumeGenerator"}><button className="btn btn-primary">Craft Your Resume</button></Link>
        </div>
      </div>
       <div className='container mb-5'>
          <div className='row align-items-center'>
            <h1 className='text-center my-3'>Tools</h1>
            <div className="col-12 col-md-6 p-4">
              <h5>Resume</h5>
              <p>Create unlimited custom resumes—Seamless editing. Job-ready always.</p>
              <h5>Cover Letters</h5>
              <p>Write cover letters that stand out—effortlessly.</p>
              <h5>Jobs</h5>
              <p>Get matched with the right jobs—tailored to your profile.</p>
              <h5>Applications</h5>
              <p>Keep your job search organized with smart application tracking.</p>
            </div>
             <div className="col-md-6 position-relative d-flex justify-content-center"style={{ marginTop: '-370px' }}>
          <img src="/resume1.jpg" alt="Resume 1"className="img-fluid rounded shadow position-absolute" style={{width: '300px',height: '400px',transform: 'rotate(-5deg)',left: '20%',zIndex: 1}}/>
          <img src="/resume2.jpg" alt="Resume 2"className="img-fluid rounded shadow position-absolute"style={{width: '300px', height: '400px',transform: 'rotate(5deg)',
      left: '40%',zIndex: 2 }}/>
        </div>
          </div>
       </div>
       
       <div className='container mb-5'>
          <div className='row align-items-center'>
            <h1 className=' text-center my-4 '>Testimony</h1>
          <div className='row align-items-start'>
              <div className="col-6 p-5 ">
                <h5>Trusted By Professional WorldWide.</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat magni aspernatur nihil libero repellat facere, perferendis similique odio dicta sunt expedita beatae dolorem suscipit facilis provident ullam velit hic harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat minima possimus labore cupiditate hic voluptatem, aperiam assumenda aliquid natus? Minima eius omnis quas, molestiae ducimus veritatis quod laboriosam consectetur temporibus.</p>
               
              </div>
               <div className="col-md-6 ">
              <div className="container my-5">
                <div className="row text-center">
                  <div className="col-3 mb-4">
                    <img src="/t1.jpg" alt="" className="img-fluid rounded "style={{ width: '100%', height: '180px', objectFit:'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t2.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t3.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t4.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t5.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t6.jpg" alt="" classn="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
                  
                    <div className="col-3 mb-4">
                    <img src="/t1.jpg" alt="" className="img-fluid rounded "style={{ width: '100%', height: '180px', objectFit:'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t2.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t3.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t4.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t5.jpg" alt="" className="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
  
                   <div className="col-3 mb-4">
                    <img src="/t6.jpg" alt="" classn="img-fluid rounded"style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}/>
                  </div>
          </div>
              </div>
            </div>
          </div>
          </div>
       </div>
     </div>
  )
}

export default LandingPage
