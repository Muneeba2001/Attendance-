import React from 'react';
import forgetPassword from "../assets/forgetPassword.jpg";
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { passwordSchema } from '../schema/form/ForgetPassword';
const initialValues = {
    password : "",
}
const ForgetPassword = () => {
    const {values,handleSubmit,handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema : passwordSchema,
    onSubmit : (values,action) => {
        console.log("Form is submitting", values)
        action.resetForm()
    }
    })
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="box grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-4">
        {/* Form */}
        <form action="" className='flex flex-col justify-center items-center' onSubmit={handleSubmit} >
          <h1 className='text-2xl font-bold p-6'>Reset Password</h1>
          <input
            type="password"
            name='password'
            id='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Reset the password'
            className='border-b-2 border-gray-300 hover:border-black w-96 p-2 mb-4'
          />
          <button
            type="submit"
            className='bg-black text-white w-44 p-2 rounded-3xl hover:bg-gray-800'
          >
            Reset Password
          </button>
          <p className='p-2'>If you dont have account  <NavLink to ="/UserAuth/Register" className="font-bold">SignUp</NavLink></p>
        </form>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img src={forgetPassword} alt="Forget Password" className='h-[450px] w-[450px]' />
        </div>
      </div>
      
    </div>
  );
}

export default ForgetPassword;
