import { useState } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer/>
   <Section1 />
   <Section2 />
    </>
  )
}

export default App
