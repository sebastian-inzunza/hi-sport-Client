import React from 'react'
import Image from 'next/image'
import { FormEvent } from 'react'

function Login() {
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      last: form.last.value as string
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json'
      },
      // The method is POST because we are sending data.
      method: 'POST'
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

  return (
    <div className='flex w-screen h-screen'>
      <div className='flex-1 bg-dark md:flex justify-center items-center bg-example-bg bg-cover bg-center p-10 hidden'>
        <Image
          className='w-screen h-auto'
          src='https://sissamx.com.mx/hi-sports/images/logos/HI_SPORTS_LOGO.png'
          alt='bajo construccion'
          width={1024}
          height={1024}
          priority
        />
      </div>
      <div className='flex-1 bg-white text-black flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-auto h-auto flex flex-col'>
          <label htmlFor='roll'>Roll Number</label>
          <input  type='text' id='roll' name='roll' required minLength={10} maxLength={20} className=' border-blue-400'/>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
