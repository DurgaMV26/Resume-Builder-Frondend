import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
//     <div className='container-fluid bg-primary'>
//         <div className="row">
//             <div className="col-4">
//                 <h1>RBuilder</h1>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt doloremque fuga at porro voluptatem facere tempora maxime, nisi repellat praesentium, possimus aspernatur optio illo totam. Eum accusantium quas distinctio?</p>
//             </div>
//             <div className="col-4">
//                 <h1>Quick Links</h1>
//                 <ul>
//                     <li>Home</li>
//                     <li>Resume Creator</li>
//                     <li>History</li>
//                 </ul>
//             </div>
//             <div className="col-4">
//                 <form action="">
//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                         <input type="text" className='form-control me-3 ' placeholder='Enter Your Email' />
//                         <button varient="outlined">Subscribe</button>
//                     </div>
//                 </form>
//                 <div className="d-flex justify-content-between align-items-center mt-5">
//                     <FaFacebook className='fs-2'/>
//                     <FaTwitter className='fs-2'/>
//                     <FaInstagram className='fs-2'/>
//                     <FaLinkedin className='fs-2'/>

//                 </div>
//             </div>
//         </div>
// </div>


 <div className="container-fluid  text-white py-5" style={{backgroundColor:"#004d40"}}>
  <div className="row">
   
    <div className="col-md-4 mb-4">
      <h3><span style={{ fontWeight:"bold"}}>RB</span>uilder</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt
        doloremque fuga at porro voluptatem facere tempora maxime.
      </p>
    </div>

    
    <div className="col-md-4 mb-4">
      <h3>Quick Links</h3>
      <ul className="list-unstyled">
        <li><a href="#" className="text-white text-decoration-none">Home</a></li>
        <li><a href="#" className="text-white text-decoration-none">Resume Creator</a></li>
        <li><a href="#" className="text-white text-decoration-none">History</a></li>
      </ul>
    </div>

    
    <div className="col-md-4 mb-4">
      <h3>Subscribe</h3>
      <form>
        <div className="d-flex">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter your email"
          />
          <button type="submit" className="btn btn-light">Subscribe</button>
        </div>
      </form>

      <div className="d-flex justify-content-start gap-3 mt-4">
        <FaFacebook className="fs-3" />
        <FaTwitter className="fs-3" />
        <FaInstagram className="fs-3" />
        <FaLinkedin className="fs-3" />
      </div>
    </div>
  </div>
</div> 
  )
}

export default Footer