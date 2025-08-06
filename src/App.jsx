import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import History from './Pages/History'
import ResumeGenerator from './Pages/ResumeGenerator'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Pages/Form'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/history' element={<History />} />
        <Route path='/resumegenerator' element={<ResumeGenerator />} />
        <Route path='/form' element={<Form />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}

        theme="light"


      />
    </>
  )
}

export default App
