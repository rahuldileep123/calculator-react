
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to store data
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [principleValid,setPrincipleValid]=useState(true)
  const [rateValid,setRateValid]=useState(true)
  const [yearValid,setYearValid]=useState(true)
  
  const handleReset=()=>{
    // reset all value
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleValid(true)
    setRateValid(true)
    setYearValid(true)
  }
  const handleValidation=(tag)=>{
    const {value,name}=tag
    console.log(value,name);
    console.log((!!value.match(/^[0-9]*.?[0-9]+$/)));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleValid(true)
      }else if(name=="rate"){
        setRate(value)
        setRateValid(true)
      }else{
        setYear(value)
        setYearValid(true)
      }
    }else{
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleValid(false)
      }else if(name=="rate"){
        setRate(value)
        setRateValid(false)
      }else{
        setYear(value)
        setYearValid(false)
      }
    }
  }
  const handleCalculate=()=>{
    if(principle && rate && year){
       setInterest(principle*rate*year/100)
    }else{
      alert("fill the form completely!!")
    }
  }
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark' >
        <div style={{ width: '600px' }} className='bg-light p-5 rounded' ><h3>simple interest calculator</h3>
          <p>calculate your simple interest easily</p>
          <div className="d-flex justify-content-center align-items-center bg-warning rounded shadow flex-column text-light p-3">
            <h1>₹{interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>
          <form action="" className='mt-5'>
            {/* principle amount */}
            <div className="mb-3">
              <TextField name='principle' onChange={e=>handleValidation(e.target)} value={principle || ""} className='w-100' id="principle" label="₹ principle amount" variant="outlined" />
            </div>
            {!principleValid && <div className="text-danger mb-2">*Invalid user Input</div>}
            <div className="mb-3">
              <TextField name='rate' onChange={e=>handleValidation(e.target)} value={rate || ""}  className='w-100' id="rate" label="Rate of Interest" variant="outlined" />
            </div>
            {!rateValid && <div className="text-danger mb-2">*Invalid user Input</div>}
            <div className="mb-3">
              <TextField name='year' onChange={e=>handleValidation(e.target)} value={year || ""} className='w-100' id="time" label="Time Period" variant="outlined" />
            </div>
            {!yearValid && <div className="text-danger mb-2">*Invalid user Input</div>}
            <Stack direction="row" spacing={2}>
              <Button onClick={handleCalculate} disabled={!principleValid || !rateValid || !yearValid} style={{width:"50%",height:"70px"}} variant="contained">CALCULATE</Button>
              <Button onClick={handleReset} style={{width:"50%",height:"70px"}} variant="outlined">RESET</Button>
            </Stack>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
