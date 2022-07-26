import React from 'react'

function Profile(props) {
  
  const ProfileChange = (e) => {
    props.setProfile({ ...props.profile, [e.target.name]: e.target.value })
  }

  return (
    <div className='flex flex-col w-full'>
      <h1 className='mt-16 w-full text-lg text-center'>Profile Details</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center w-full p-2'>
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none'  value={props.profile.FullName} name='FullName' onChange={ProfileChange} type='text' placeholder='Full Name' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.profile.Address} name='Address' onChange={ProfileChange} type='text' placeholder="Address" />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.profile.EmailAddress} name='EmailAddress' onChange={ProfileChange} type='email' placeholder='Email Address' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.profile.MobileNumber} name='MobileNumber' onChange={ProfileChange} type='tel' placeholder='Mobile Number' />
        <input className='w-3/4 mx-2 my-2 md:w-96 p-2 rounded outline-none' value={props.profile.Place} name='Place' onChange={ProfileChange} type='text' placeholder='Current Place' />
      </div>
    </div>
  )
}

export default Profile;