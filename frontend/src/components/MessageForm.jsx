import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const MessageForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-lg bg-white p-8 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form  className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // {...register("name", { required: "Name is required" })}
          />
          {/* {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )} */}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // {...register("email", {
            //   required: "Email is required",
            //   pattern: {
            //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //     message: "Please provide a valid Email!",
            //   },
            // })}
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )} */}
        </div>

        {/* Phone Field */}
        <div>
          <label className="block font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // {...register("phone", { required: "Phone number is required" })}
          />
          {/* {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )} */}
        </div>

        {/* Message Field */}
        <div>
          <label className="block font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // {...register("message", { required: "Message is required" })}
          ></textarea>
          {/* {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )} */}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default MessageForm