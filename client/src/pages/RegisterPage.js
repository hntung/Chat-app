import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  })

  const [uploadPhoto, setUploadPhoto] = useState("")

  const handlleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0]
    setUploadPhoto(file)
  }

  const handleClearUploadPhoto = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setUploadPhoto(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(data)
  }
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-sm mx-2 rou overflow-hidden p-4 mx-auto'>
        <h3>Welcome to Chat app!</h3>
        <form className='gird gap-4 mt-5' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.name}
              onChange={handlleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handlleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.password}
              onChange={handlleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='profile_pic'>Photo:
              <div className='h-14 bg-slate-200 flex justify-center items-center hover:border rounded border-primary'>
                <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                  {
                    uploadPhoto?.name ? uploadPhoto.name : "Upload your profile photo"
                  }
                </p>
                {
                  uploadPhoto?.name && (
                    <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadPhoto}>
                      <FaRegTrashAlt />
                    </button>
                  )
                }
              </div>

            </label>
            <input
              type='file'
              id='profile_pic'
              name='profile_pic'
              className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
              onChange={handleUploadPhoto}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
            >
              Register
            </button>
          </div>
        </form>
        <p className='my-3 text-center'>Already have account ? <Link to={"/email"} className='hover:text-primary font-semibold'>Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage