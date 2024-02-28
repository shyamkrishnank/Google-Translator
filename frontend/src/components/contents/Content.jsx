import { Button, Textarea } from '@nextui-org/react'
import axios from 'axios'
import React, { useState } from 'react'

function Content() {
    const [word, setWord] = useState()
    const [transWord, setTransword] = useState()

    const handleSubmit = () =>{
        const data = {
            'word' : word
        }
        axios.post('http://127.0.0.1:8000/translate/', data)
        .then(response=>{
            console.log(response.data)
            setTransword(response.data.word)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className='mt-12 mx-12'>
      <div className='flex gap-4'>
        <div className='basis-4/6 flex justify-center'>
           <Textarea
            label="English"
            placeholder="Enter the content to translate"
            className='text-3xl'
            onChange={(e)=>setWord(e.target.value)}
            size='lg'
            />
        </div>
        <div className='basis-2/6 ml-8 flex items-center'>
            <Button 
             onClick={handleSubmit}
             color="primary" variant="shadow"
            >Submit
            </Button>
        </div>
      </div> 
      <div className='mt-5 ml-7'>
          {transWord && <p className='font-semibold'>{transWord}</p>} 
      </div>
      <p></p> 
    </div>
    
  )
}

export default Content
