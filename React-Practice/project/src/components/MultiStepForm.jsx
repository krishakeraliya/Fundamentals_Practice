import React, { useState } from 'react'

function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name required!"
      if (!formData.email.includes("@")) newErrors.email = "Valid email required"
    }
    if (step === 2) {
      if (!formData.phone) newErrors.phone = "Phone required!"
      if (!formData.address) newErrors.address = "Address required!"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) setStep(step + 1)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        {/* Progress Bar */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${step >= s ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"}`}>
              {s}
            </div>
          ))}
        </div>

        <h1 className="text-xl font-bold text-gray-700 mb-4">Step: {step}</h1>

        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-600">Personal Info</h2>

            <input
              placeholder="Enter your name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              placeholder="Enter your email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <button
              onClick={handleNext}
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 mt-2">
              Next
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-600">Contact Info</h2>

            <input
              placeholder="Enter your phone"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input
              placeholder="Enter your address"
              value={formData.address}
              name="address"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 border border-gray-300 text-gray-600 rounded-lg p-2 hover:bg-gray-100">
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-600">Review</h2>

            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-500">Personal Info</h3>
              <p className="text-gray-700">Name: <span className="font-medium">{formData.name}</span></p>
              <p className="text-gray-700">Email: <span className="font-medium">{formData.email}</span></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-500">Contact Info</h3>
              <p className="text-gray-700">Phone: <span className="font-medium">{formData.phone}</span></p>
              <p className="text-gray-700">Address: <span className="font-medium">{formData.address}</span></p>
            </div>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 border border-gray-300 text-gray-600 rounded-lg p-2 hover:bg-gray-100">
                Back
              </button>
              <button
                onClick={() => alert("Submitted!")}
                className="flex-1 bg-green-500 text-white rounded-lg p-2 hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MultiStepForm