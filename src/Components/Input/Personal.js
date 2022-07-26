import React from 'react'

function Personal(props) {

  const ProfileChange = (e) => {
    props.setPersonal({ ...props.personal, [e.target.name]: e.target.value })
  }
  

  return (
    <div className='flex flex-col w-full'>
      <h1 className='mt-16 w-full text-lg text-center'>Personal Details</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center w-full p-2'>
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none'  value={props.personal.FatherName} name='FatherName' onChange={ProfileChange} type='text' placeholder="Father's Name" />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.DOB} name='DOB' onChange={ProfileChange} type='date' placeholder="01/01/1990" />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.Gender} name='Gender' onChange={ProfileChange} type='text' placeholder='Gender - Male/Female' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.Religion} name='Religion' onChange={ProfileChange} type='text' placeholder='Religion - Hindu/Muslim/Sikh' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.Nationality} name='Nationality' onChange={ProfileChange} type='text' placeholder='Nationality - Indian' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.Language} name='Language' onChange={ProfileChange} type='text' placeholder='Language Known' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.personal.Marriage} name='Marriage' onChange={ProfileChange} type='text' placeholder='Married/Unmarried' />
      </div>
    </div>
  )
}

export default Personal;