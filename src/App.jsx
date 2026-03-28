import { Suspense } from 'react'
import './App.css'
import Banner from './components/Homepage/Banner/Banner'
import Footer from './components/Homepage/Footer/Footer'
import NavBar from './components/Homepage/Navbar/Navbar'
import Main from './components/Main/Main'
import { ToastContainer } from 'react-toastify'

const getData = async() =>{
  const res = await fetch('/models.json')
  return res.json();
}

const modelsPromise = getData();

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>

      <Suspense fallback={<span className="$$loading $$loading-ring $$loading-lg"></span>}>
        <Main modelsPromise={modelsPromise}/>
      </Suspense>

      <Footer/>
      <ToastContainer 
        position="top-center"
      />
    </>
  )
}

export default App
