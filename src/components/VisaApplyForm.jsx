"use client"

import React from 'react'
import { useForm } from 'react-hook-form'

const VisaApplyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div id='form' className="py-10">
      <h2 className='px-4 py-2 rounded-md bg-[#1c9495] inline-block text-white font-semibold mb-5'>
        Visa Application Form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white shadow-md rounded-md"
      >
        {/* Basic Info */}
        <div>
          <label htmlFor='name'>Full Name</label>
          <input
          name='name'
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            {...register("fullName", { required: true })}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            id='email'
            name='email'
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            type="tel"
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            {...register("mobile", { required: true })}
          />
        </div>

        <div>
          <label>Country of Interest</label>
          <input
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            {...register("country", { required: true })}
          />
        </div>

        {/* Optional Radio Fields */}
        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Do you have a valid passport for at least six months? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("passport")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("passport")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Do you have a regular and verifiable source of income? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("incomeSource")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("incomeSource")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Are you an active tax filer? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("taxFiler")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("taxFiler")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Do you have a consistent 6-months bank statement? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("bankStatement")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("bankStatement")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Do you have sufficient funds for this trip (25-30 lac PKR)? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("sufficientFunds")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("sufficientFunds")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Are you married? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("married")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("married")} /> No</label>
          </div>
        </div>

        <div className='w-full px-3 py-2 bg-white border border-black outline-none rounded-lg'>
          <label>Member of Chamber of Commerce? (opt)</label>
          <div>
            <label><input type="radio" value="Yes" {...register("chamberMember")} /> Yes</label>
            <label className="ml-4"><input type="radio" value="No" {...register("chamberMember")} /> No</label>
          </div>
        </div>

        {/* Education */}
        <div className="col-span-full">
          <label className='font-semibold'>Education</label>
          <textarea
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            rows="3"
            {...register("education", { required: true })}
          ></textarea>
        </div>

        {/* Purpose of Visit */}
        <div className="col-span-full">
          <label>Purpose of Your Visit</label>
          <textarea
            className="w-full px-3 py-2 bg-white border border-black outline-none rounded-lg"
            rows="3"
            {...register("visitPurpose", { required: true })}
          ></textarea>
        </div>

        {/* Submit */}
        <div className="col-span-full">
          <input
            type="submit"
            className="bg-[#1c9495] text-white px-6 py-2 rounded-lg cursor-pointer"
            value="Submit Application"
          />
        </div>
      </form>
    </div>
  )
}

export default VisaApplyForm
